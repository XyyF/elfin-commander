const shell = require('shelljs');

module.exports = {
    warning,
    error,
}

// 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
// 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色
// \x1B[背景色编号m\x1B[字色编号m  ~~  \x1B[0m

function warning(str) {
    return shell.echo('\x1B[43m\x1B[30m WARNING \x1B[0m' + str);
};

function error(str) {
    return shell.echo('\x1B[41m\x1B[30m ERROR \x1B[0m' + str);
}