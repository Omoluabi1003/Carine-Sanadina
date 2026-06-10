const { readFileSync } = require('node:fs');
const { spawnSync } = require('node:child_process');

const baseRef = process.env.PR_BASE_REF || 'origin/main';
const conflictMarkerPattern = /^(<<<<<<<|=======|>>>>>>>)(?: |$)/;
const conflictSensitiveFiles = ['script.js', 'styles.css'];
const failures = [];

const git = (...args) => {
  const result = spawnSync('git', args, { encoding: 'utf8' });

  if (result.status !== 0) {
    const detail = (result.stderr || result.stdout).trim();
    throw new Error(`git ${args.join(' ')} failed${detail ? `: ${detail}` : ''}`);
  }

  return result.stdout.trim();
};

const check = (condition, successMessage, failureMessage) => {
  if (condition) {
    console.log(`✓ ${successMessage}`);
    return;
  }

  failures.push(failureMessage);
  console.error(`✗ ${failureMessage}`);
};

try {
  git('rev-parse', '--show-toplevel');

  const branch = git('branch', '--show-current');
  check(Boolean(branch), `Current branch is ${branch}`, 'HEAD is detached; switch to a feature branch.');
  check(branch !== 'main' && branch !== 'master', 'Current branch is not a protected base branch.', `Current branch is ${branch}; create a feature branch before opening a PR.`);

  const originUrl = git('remote', 'get-url', 'origin');
  check(Boolean(originUrl), `origin is configured as ${originUrl}`, 'The origin remote is missing.');

  git('rev-parse', '--verify', baseRef);
  console.log(`✓ Base reference ${baseRef} exists locally.`);

  const status = git('status', '--porcelain');
  check(!status, 'Working tree is clean.', 'Working tree has uncommitted changes; commit or stash them first.');

  const unmergedFiles = git('diff', '--name-only', '--diff-filter=U');
  check(!unmergedFiles, 'Git reports no unmerged files.', `Unmerged files remain:\n${unmergedFiles}`);

  for (const file of conflictSensitiveFiles) {
    const markerLines = readFileSync(file, 'utf8')
      .split(/\r?\n/)
      .map((line, index) => ({ line, number: index + 1 }))
      .filter(({ line }) => conflictMarkerPattern.test(line))
      .map(({ number, line }) => `${file}:${number}:${line}`);

    check(markerLines.length === 0, `${file} has no unresolved conflict markers.`, `Conflict markers remain:\n${markerLines.join('\n')}`);
  }

  const whitespaceErrors = spawnSync('git', ['diff', '--check', `${baseRef}...HEAD`], { encoding: 'utf8' });
  check(whitespaceErrors.status === 0, 'Committed changes pass git diff --check.', (whitespaceErrors.stdout || whitespaceErrors.stderr).trim() || 'Committed changes fail git diff --check.');

  const [aheadText, behindText] = git('rev-list', '--left-right', '--count', `${baseRef}...HEAD`).split(/\s+/);
  const behind = Number(aheadText);
  const ahead = Number(behindText);
  check(ahead > 0, `Branch has ${ahead} commit(s) not in ${baseRef}.`, `Branch has no commits ahead of ${baseRef}; GitHub cannot create an empty PR.`);
  check(behind === 0, `Branch is up to date with ${baseRef}.`, `Branch is ${behind} commit(s) behind ${baseRef}; merge the latest base branch before opening the PR.`);
} catch (error) {
  failures.push(error.message);
  console.error(`✗ ${error.message}`);
}

if (failures.length > 0) {
  console.error(`\nPR readiness check failed with ${failures.length} issue(s).`);
  process.exitCode = 1;
} else {
  console.log(`\nBranch is ready for a pull request against ${baseRef}.`);
}
