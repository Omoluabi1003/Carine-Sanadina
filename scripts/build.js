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

const appShellAssets = ['styles.css', 'content-reflections.js', 'script.js'];
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
  'Halleluyah Cover.png'
];

for (const file of staticRootAssets) {
  const sourceFile = join(root, file);

  if (existsSync(sourceFile) && statSync(sourceFile).isFile()) {
    cpSync(sourceFile, join(dist, file));
  }
}

copyStaticDirectory('legal');
copyStaticDirectory('lyrics');
copyStaticDirectory('studio');

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
