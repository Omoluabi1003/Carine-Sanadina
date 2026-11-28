const { cpSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } = require('node:fs');
const { createHash } = require('node:crypto');
const { basename, extname, join } = require('node:path');

const root = process.cwd();
const dist = join(root, 'dist');
const publicDir = join(root, 'public');

const hashedAssetName = (filename, contents) => {
  const extension = extname(filename);
  const base = basename(filename, extension);
  const hash = createHash('sha256').update(contents).digest('hex').slice(0, 12);

  return `${base}.${hash}${extension}`;
};

const replaceAppShellAssetReferences = (contents, assetMap) => Object.entries(assetMap).reduce(
  (nextContents, [sourceName, hashedName]) => nextContents
    .replaceAll(`href="${sourceName}"`, `href="${hashedName}"`)
    .replaceAll(`src="${sourceName}"`, `src="${hashedName}"`)
    .replaceAll(`href="../${sourceName}"`, `href="../${hashedName}"`)
    .replaceAll(`src="../${sourceName}"`, `src="../${hashedName}"`)
    .replaceAll(`'./${sourceName}'`, `'./${hashedName}'`),
  contents
);

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const appShellAssets = ['styles.css', 'content-reflections.js', 'script.js', 'content-platform.js'];
const assetMap = {};

for (const file of appShellAssets) {
  const contents = readFileSync(join(root, file));
  const outputName = hashedAssetName(file, contents);
  assetMap[file] = outputName;
  writeFileSync(join(dist, outputName), contents);
}

for (const file of ['index.html', 'offline.html']) {
  const contents = readFileSync(join(root, file), 'utf8');
  writeFileSync(join(dist, file), replaceAppShellAssetReferences(contents, assetMap));
}

for (const file of ['manifest.json', 'sw.js']) {
  const contents = readFileSync(join(root, file), 'utf8');
  writeFileSync(join(dist, file), replaceAppShellAssetReferences(contents, assetMap));
}

const copyStaticDirectory = (relativeDirectory) => {
  const sourceDirectory = join(root, relativeDirectory);

  if (!existsSync(sourceDirectory) || !statSync(sourceDirectory).isDirectory()) {
    return;
  }

  cpSync(sourceDirectory, join(dist, relativeDirectory), { recursive: true });
};

const staticRootAssets = [
  'CS logo.png',
  'Carine Sanadina.png',
  '0F2574B3-8BD8-42CF-B229-3CA96FA94214.png',
  'Consolation Cover.png',
  'La Gentillesse.png',
  'Wonderful cover.png',
  '4B4AE259-EC5A-46A2-BB9A-355667A3C23C.png',
  '00243680-B36E-4587-8623-9AEFD1896D1A.png',
  'Halleluyah Cover.png',
  'Hosanna.jpg',
  'Matondo.jpeg',
  'Work On Me.jpeg',
  'Work On Me.mp3'
];

for (const file of staticRootAssets) {
  const sourceFile = join(root, file);

  if (existsSync(sourceFile) && statSync(sourceFile).isFile()) {
    cpSync(sourceFile, join(dist, file));
  }
}

copyStaticDirectory('legal');
copyStaticDirectory('lyrics');

const legalIndex = join(dist, 'legal', 'index.html');
if (existsSync(legalIndex)) {
  const contents = readFileSync(legalIndex, 'utf8');
  writeFileSync(legalIndex, replaceAppShellAssetReferences(contents, assetMap));
}

if (existsSync(publicDir)) {
  cpSync(publicDir, dist, { recursive: true });
}

console.log('Static site built in dist/');
console.log(`Hashed app shell assets: ${Object.entries(assetMap).map(([source, output]) => `${source} -> ${output}`).join(', ')}`);

require('./audio-analysis').generate(root, dist);

// Publish a same-origin copy of the CC0 MakeHuman-derived hand. A failed
// optional asset must not take down the existing music website.
(async () => {
  const target = join(dist, 'assets', 'first-touch', 'hand-posable.glb');
  const source = 'https://files.innerscene.com/library/posable-anatomical-right-hand-f6098b4f/c28ad5ff8fafd424275f/hand-posable.glb';
  const valid = b => b.length >= 20 && b.toString('ascii',0,4)==='glTF' && b.readUInt32LE(4)===2 && b.readUInt32LE(8)===b.length;
  if (existsSync(target) && valid(readFileSync(target))) return;
  for (const url of [source, 'https://www.innerscene.com/api/library/posable-anatomical-right-hand-f6098b4f/download']) {
    try {
      const response = await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(15000)});
      if(!response.ok)throw new Error('HTTP '+response.status);
      const bytes=Buffer.from(await response.arrayBuffer());
      if(!valid(bytes))throw new Error('Invalid GLB header or length');
      mkdirSync(join(dist,'assets','first-touch'),{recursive:true});
      writeFileSync(target,bytes);
      console.log('First Touch: same-origin GLB published ('+bytes.length+' bytes)');return;
    } catch (err) { console.warn('First Touch asset source failed: '+err.message); }
  }
  console.warn('First Touch asset unavailable: deployment retains standard playback.');
})();
