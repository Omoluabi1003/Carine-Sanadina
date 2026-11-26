const test=require('node:test');
const assert=require('node:assert/strict');
const {analyze,STRIDE,RATE,HOP}=require('../scripts/audio-analysis');
test('silent PCM has no frequency energy or synthetic waveform',()=>{
 const a=analyze(Buffer.alloc(HOP*4)), bytes=Buffer.from(a.data,'base64');
 assert.equal(a.step,.1);assert.equal(a.frames,1);assert.equal(bytes.length,STRIDE);
 assert.ok(bytes.subarray(0,32).every(x=>x===0));assert.ok(bytes.subarray(32,96).every(x=>x===128));
 assert.equal(bytes[96],0);assert.equal(bytes[97],0);
});
test('measured tone changes spectral location and preserves sample energy',()=>{
 const run=hz=>{const pcm=Buffer.alloc(HOP*3*4);for(let i=0;i<HOP*3;i++)pcm.writeFloatLE(.5*Math.sin(2*Math.PI*hz*i/RATE),i*4);return Buffer.from(analyze(pcm).data,'base64').subarray(STRIDE,STRIDE*2);};
 const low=run(440),high=run(4000),peak=b=>b.indexOf(Math.max(...b.subarray(0,32)));
 assert.ok(peak(high)>peak(low));assert.ok(low[96]>60);assert.ok(low[97]>100);
 assert.ok(low.subarray(32,96).some(x=>x!==128));
});
