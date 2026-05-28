const { copyFileSync, rmSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const root = process.cwd();
const dist = join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  copyFileSync(join(root, file), join(dist, file));
}

console.log('Static site built in dist/');
