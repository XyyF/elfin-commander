const shell = require('shelljs');
const { loadFile } = require('../../utils/shell');
const { error } = require('../../utils/log')

const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|style|build|chore|refactor|breaking change)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge /;


module.exports = function commitMsg() {
  shell.echo('start elfincmd hooks commit-msg');

  const gitParams = process.env.HUSKY_GIT_PARAMS;
  const commitMsg = loadFile(gitParams);

  if (!commitRE.test(commitMsg) && !mergeRE.test(commitMsg)) {
    error(`invalid commit message: "${commitMsg}".
  Proper commit message format is required for automated changelog generation.
  Examples: 
  - fix: incorrect style
  - feat: incorrect style
  Allowed Types:
  - fix
  - feat
  - docs
  - perf
  - test
  - types
  - build
  - chore
  - refactor
  - breaking change
  - Merge branch 'foo' into 'bar'
  `);
    process.exit(1);
  }
  
  shell.echo('end elfincmd hooks commit-msg');
}