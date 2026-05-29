const { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } = require('node:fs');
const { dirname, join } = require('node:path');
const { spawnSync } = require('node:child_process');

const root = process.cwd();
const dist = join(root, 'dist');
const publicDir = join(root, 'public');

const remoteAssets = [
  {
    output: 'assets/CS-logo.png',
    url: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/CS%20logo.png',
  },
  {
    output: 'assets/music/consolation-cover.png',
    url: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Consolation%20Cover.png',
  },
  {
    output: 'assets/music/consolation.mp3',
    url: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Consolation.mp3',
  },
];

const downloadAsset = ({ output, url }) => {
  const outputPath = join(dist, output);
  mkdirSync(dirname(outputPath), { recursive: true });

  const result = spawnSync('curl', ['-fL', '--retry', '3', '--output', outputPath, url], {
    stdio: 'inherit',
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`Failed to download ${url}`);
  }
};

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  copyFileSync(join(root, file), join(dist, file));
}

if (existsSync(publicDir)) {
  cpSync(publicDir, dist, { recursive: true });
}

remoteAssets.forEach(downloadAsset);

console.log('Static site built in dist/');
