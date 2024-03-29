import shellUtil from '../../utils/shell';
import logUtil from '../../utils/log';

const commitRE = /^(revert: )?(fix|feat|docs|perf|test|types|chore|style|build|refactor|breaking change)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge /;

export default function commitMsg() {
  const gitParams = process.env.HUSKY_GIT_PARAMS || '';
  const commitMsg = shellUtil.loadByCmdPath(gitParams);

  if (!commitRE.test(commitMsg) && !mergeRE.test(commitMsg)) {
    logUtil.error(`invalid commit message: "${commitMsg}".
  Proper commit message format is required for automated changelog generation.
  Examples: 
  - fix: incorrect style
  - feat: incorrect style
  Allowed Types:
  - fix      修复bug
  - feat     完成需求
  - chore    零星工作
  - docs     补充文档
  - perf     性能相关
  - test     测试代码
  - types    声明文件
  - style    css相关
  - build    编译相关
  - refactor 重构代码
  - Merge branch 'branch1' into 'branch2'
  `);
    process.exit(1);
  }
};
