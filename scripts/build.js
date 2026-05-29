const { copyFileSync, cpSync, existsSync, mkdirSync, rmSync, statSync } = require('node:fs');
const { join } = require('node:path');

const root = process.cwd();
const dist = join(root, 'dist');
const publicDir = join(root, 'public');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  copyFileSync(join(root, file), join(dist, file));
}

const copyStaticDirectory = (relativeDirectory) => {
  const sourceDirectory = join(root, relativeDirectory);

  if (!existsSync(sourceDirectory) || !statSync(sourceDirectory).isDirectory()) {
    return;
  }

  cpSync(sourceDirectory, join(dist, relativeDirectory), { recursive: true });
};

copyStaticDirectory('legal');

if (existsSync(publicDir)) {
  cpSync(publicDir, dist, { recursive: true });
}

console.log('Static site built in dist/');
