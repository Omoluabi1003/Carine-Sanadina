const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

const readPlaylist = () => {
  const start = script.indexOf('const CARINE_MUSIC_PLAYLIST = [');
  const end = script.indexOf('\n];', start);
  assert.notEqual(start, -1, 'playlist declaration should exist');
  assert.notEqual(end, -1, 'playlist declaration should close');
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${script.slice(start, end + 3)}\nthis.playlist = CARINE_MUSIC_PLAYLIST;`, context);
  return context.playlist;
};

const playlistById = () => new Map(readPlaylist().map((track) => [track.id, track]));

const parseLrcTimestamps = (contents) => [...contents.matchAll(/\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g)]
  .map((match) => (Number(match[1]) * 60) + Number(match[2]) + Number(`0.${match[3] || 0}`));

test('each track declares only its own expected timed or static lyrics source', () => {
  const tracks = playlistById();
  const expectedTimed = {
    consolation: '/lyrics/consolation.lrc',
    gentillesse: '/lyrics/la-gentillesse.lrc',
    wonderful: '/lyrics/wonderful.lrc',
    womanifesto: '/lyrics/womanifesto.lrc'
  };
  const expectedStatic = {
    'paranoia-persecutive': '/lyrics/paranoia-persecutive.txt',
    reason: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Reason.txt',
    halleluyah: 'https://raw.githubusercontent.com/Omoluabi1003/Carine-Sanadina/main/Halleluyah.txt'
  };

  for (const [trackId, lyricsLrc] of Object.entries(expectedTimed)) {
    assert.equal(tracks.get(trackId)?.lyricsLrc, lyricsLrc);
    assert.match(lyricsLrc, /\.lrc$/);
  }

  for (const [trackId, lyrics] of Object.entries(expectedStatic)) {
    const track = tracks.get(trackId);
    assert.equal(track?.lyrics, lyrics);
    assert.equal(track?.lyricsLrc, '', `${trackId} must not claim fake synchronized lyrics`);
    assert.match(lyrics, /\.txt$/);
  }

  assert.equal(tracks.get('halleluyah')?.language, 'Lingala');
});

test('existing synchronized lyric files contain ordered timestamps and lyric text', () => {
  const tracks = playlistById();
  for (const trackId of ['consolation', 'gentillesse', 'wonderful', 'womanifesto']) {
    const lyricsPath = tracks.get(trackId).lyricsLrc.replace(/^\//, '');
    const contents = fs.readFileSync(path.join(root, lyricsPath), 'utf8');
    const timestamps = parseLrcTimestamps(contents);
    assert.ok(timestamps.length > 10, `${trackId} should contain timed lyric lines`);
    assert.deepEqual(timestamps, [...timestamps].sort((a, b) => a - b), `${trackId} timestamps should be ordered`);
    assert.ok(contents.replace(/\[[^\]]+\]/g, '').trim().length > 0, `${trackId} should contain lyric text`);
  }
});

test('static lyric sources contain complete untimed text', () => {
  const files = ['lyrics/paranoia-persecutive.txt', 'Reason.txt', 'Halleluyah.txt'];
  for (const file of files) {
    const contents = fs.readFileSync(path.join(root, file), 'utf8');
    assert.ok(contents.trim().split(/\r?\n/).length > 20, `${file} should contain complete lyrics`);
    assert.equal(parseLrcTimestamps(contents).length, 0, `${file} must not contain invented timestamps`);
  }
});

test('lyrics loader clears state and rejects stale responses for every source branch', () => {
  const loaderStart = script.indexOf('  const loadLyricsForPlayer = async (player) => {');
  const loaderEnd = script.indexOf('\n  const scrollActiveLyricIntoFocus', loaderStart);
  const loader = script.slice(loaderStart, loaderEnd);
  const trackChangeStart = script.indexOf('  const setActiveTrack = (player) => {');
  const trackChangeEnd = script.indexOf('\n  const syncSourceCard', trackChangeStart);
  const trackChange = script.slice(trackChangeStart, trackChangeEnd);

  assert.match(loader, /const isCurrentRequest = \(\) => requestToken === lyricsLoadToken/);
  assert.ok((loader.match(/if \(!isCurrentRequest\(\)\) return;/g) || []).length >= 5);
  assert.match(loader, /hasLyricsFileExtension\(lrcPath, '\.lrc'\)/);
  assert.match(loader, /hasLyricsFileExtension\(lyricsPath, '\.txt'\)/);
  assert.doesNotMatch(loader, /lyricsSourceMap|staticLyricsSourceMap|dataset\.trackLyrics/);
  assert.match(loader, /const lrcPath = track\?\.lyricsPath \|\| '';/);
  assert.match(loader, /const lyricsPath = track\?\.staticLyricsPath \|\| '';/);
  assert.match(loader, /loadedLyricsTrackId = requestedTrackId;/);
  assert.match(trackChange, /lyricsLoadToken \+= 1;/);
  assert.match(trackChange, /loadedLyricsTrackId = '';/);
  assert.match(trackChange, /lyricEntries = \[\];/);
  assert.match(trackChange, /setLyricsMessage\(activeTrack \? t\('lyrics.loading'/);
});

test('debugLyricsSync reports selected source, loaded owner, mode, token, and timing state', () => {
  for (const field of [
    'activeTrackId', 'activeTrackTitle', 'lyricsMode', 'lyricsPath', 'staticLyricsPath',
    'loadedLyricsTrackId', 'lyricsLoadToken', 'parsedLineCount', 'isTimedLyrics',
    'isStaticLyrics', 'activeLyricIndex', 'audioCurrentTime'
  ]) {
    assert.match(script, new RegExp(`\\b${field}\\b`), `missing debug field ${field}`);
  }
  assert.match(script, /window\.debugLyricsSync = \(\) =>/);
});
