'use strict';
// Build-time PCM analysis. No synthetic values; no browser audio routing.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawnSync } = require('node:child_process');
const RATE=22050, N=1024, HOP=2205, BANDS=32, WAVE=64, STRIDE=BANDS+WAVE+2;
function fft(re, im) {
  for(let i=1,j=0;i<N;i++){let bit=N>>1;for(;j&bit;bit>>=1)j^=bit;j^=bit;if(i<j){[re[i],re[j]]=[re[j],re[i]];[im[i],im[j]]=[im[j],im[i]];}}
  for(let len=2;len<=N;len*=2){for(let i=0;i<N;i+=len){for(let j=0;j<len/2;j++){const a=-2*Math.PI*j/len,c=Math.cos(a),s=Math.sin(a),k=i+j,l=k+len/2;const x=re[l]*c-im[l]*s,y=re[l]*s+im[l]*c;re[l]=re[k]-x;im[l]=im[k]-y;re[k]+=x;im[k]+=y;}}}
}
const byte=x=>Math.round(Math.min(255,Math.max(0,x)));
function analyze(pcm){
  const count=Math.floor(pcm.length/4), frames=Math.ceil(count/HOP), out=Buffer.alloc(frames*STRIDE);
  const re=new Float64Array(N),im=new Float64Array(N);
  const window=Float64Array.from({length:N},(_,i)=>.5-.5*Math.cos(2*Math.PI*i/(N-1)));
  const sample=i=>i>=0&&i<count?pcm.readFloatLE(i*4):0;
  for(let frame=0;frame<frames;frame++){
    const center=frame*HOP, offset=frame*STRIDE;
    let sum=0,peak=0;
    for(let i=0;i<N;i++){const x=sample(center+i-N/2);re[i]=x*window[i];im[i]=0;sum+=x*x;peak=Math.max(peak,Math.abs(x));}
    for(let i=0;i<WAVE;i++)out[offset+BANDS+i]=byte(128+127*sample(center+Math.floor(i*N/WAVE)-N/2));
    out[offset+BANDS+WAVE]=byte(Math.sqrt(sum/N)*255);out[offset+BANDS+WAVE+1]=byte(peak*255);
    fft(re,im);
    for(let k=0;k<BANDS;k++){const lo=30*Math.pow(10000/30,k/BANDS),hi=30*Math.pow(10000/30,(k+1)/BANDS);const start=Math.max(1,Math.floor(lo*N/RATE)),end=Math.min(N/2,Math.max(start+1,Math.ceil(hi*N/RATE)));let energy=0;for(let i=start;i<end;i++)energy+=re[i]*re[i]+im[i]*im[i];const amp=Math.sqrt(energy/Math.max(1,end-start))*4/N;const db=20*Math.log10(Math.max(amp,1e-9));out[offset+k]=byte((db+80)*255/75);}
  }
  return {version:1,step:HOP/RATE,bands:BANDS,wave:WAVE,stride:STRIDE,frames,duration:count/RATE,data:out.toString('base64')};
}
function getDecoder(tmp){
  const candidate=process.env.FFMPEG_PATH||'ffmpeg';
  if(spawnSync(candidate,['-version'],{stdio:'ignore'}).status===0)return candidate;
  if(!process.env.VERCEL||process.platform!=='linux'||process.arch!=='x64')return null;
  // Exact version; extract executable only, no lifecycle scripts or shell interpolation.
  const pack=spawnSync('npm',['pack','@ffmpeg-installer/linux-x64@4.1.0','--pack-destination',tmp,'--ignore-scripts','--silent'],{encoding:'utf8',timeout:90000});
  if(pack.status!==0)return null;
  const archive=fs.readdirSync(tmp).find(x=>x.endsWith('.tgz'));
  if(!archive)return null;
  const extracted=spawnSync('tar',['-xzf',path.join(tmp,archive),'-C',tmp,'package/ffmpeg'],{timeout:30000});
  const binary=path.join(tmp,'package','ffmpeg');if(extracted.status!==0||!fs.existsSync(binary))return null;
  fs.chmodSync(binary,0o755);return binary;
}
function generate(root,dist){
  const script=fs.readFileSync(path.join(root,'script.js'),'utf8');
  const playlist=script.split('const CARINE_MUSIC_PLAYLIST = [')[1]?.split('\n];')[0]||'';
  const tracks=[...playlist.matchAll(/\bid:\s*'([a-z0-9-]+)'[\s\S]*?\baudioUrl:\s*'([^']+)'/g)];
  const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'carine-analysis-'));
  try{
    const decoder=getDecoder(tmp);
    if(!decoder){console.warn('Audio analysis: decoder unavailable; no simulated signal emitted.');return;}
    const dir=path.join(dist,'audio-analysis');fs.mkdirSync(dir,{recursive:true});
    for(const [,id,url] of tracks){
      const remote=url.startsWith('https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/');
      const filename=decodeURIComponent(remote?url.split('/').pop():url.replace(/^\.\//,''));
      const local=path.join(root,filename);
      let input=fs.existsSync(local)?local:null;
      if(!input&&remote&&process.env.VERCEL)input=url;
      if(!input){console.warn('Audio analysis: source missing',id);continue;}
      const decoded=spawnSync(decoder,['-nostdin','-v','error','-i',input,'-vn','-ac','1','-ar',String(RATE),'-f','f32le','-t','900','pipe:1'],{maxBuffer:100*1024*1024,timeout:90000});
      if(decoded.status!==0||!decoded.stdout?.length){console.warn('Audio analysis: decode failed',id);continue;}
      const result=analyze(decoded.stdout);result.id=id;result.source=url;
      fs.writeFileSync(path.join(dir,id+'.json'),JSON.stringify(result));console.log('Audio analysis:',id,result.frames,'measured frames');
    }
  }finally{fs.rmSync(tmp,{recursive:true,force:true});}
}
module.exports={analyze,generate,STRIDE,RATE,HOP};
