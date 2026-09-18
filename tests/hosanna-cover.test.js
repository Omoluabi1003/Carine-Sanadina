const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const buildScript = fs.readFileSync(path.join(root, 'scripts/build.js'), 'utf8');
const cover = 'CED3FF47-13B6-44E2-A80B-E9FE1469049D.png';
const coverUrl = `https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/${cover}`;

test('Hosanna uses its approved cover throughout the website', () => {
  assert.match(script, /id: 'hosanna'/);
  assert.match(script, /audioUrl: 'https:\/\/raw\.githubusercontent\.com\/Omoluabi1003\/Carine-Sanadina\/main\/Hosanna\.mp3'/);
  assert.equal(script.includes(`coverUrl: '${coverUrl}'`), true);
  assert.equal(indexHtml.includes(`"image": "${coverUrl}"`), true);
  assert.equal(buildScript.includes(`'${cover}'`), true);
  assert.equal(fs.existsSync(path.join(root, cover)), true);
});
