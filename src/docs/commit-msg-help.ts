import logUtil from '../../utils/log';

export default function commitMsg() {
  logUtil.logBgYellow('Allowed Types:');
  logUtil.log(`
    - fix      修复bug
    - feat     完成需求
    - docs     补充文档
    - perf     性能相关
    - test     测试代码
    - types    声明文件
    - style    css相关
    - build    编译相关
    - refactor 重构代码
    - Merge branch 'foo' into 'bar'
    `);
};
