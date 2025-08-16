const { execSync } = require('child_process');

function getGitDiff() {
  return execSync('git diff HEAD~1 HEAD --unified=0', { encoding: 'utf-8' });
}

module.exports = { getGitDiff };
