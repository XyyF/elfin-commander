const shell = require('shelljs');

// 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
// 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色
// \x1B[背景色编号m\x1B[字色编号m  ~~  \x1B[0m
const ColorEnums = {
    yellow: '\x1B[43m\x1B[30m ${string} \x1B[0m',
    red: '\x1B[41m\x1B[30m ${string} \x1B[0m',
}

module.exports = class LogAPI {
    constructor() {}

    _log(str) {
        return shell.echo(str);
    }

    _getColorLog(str, color) {
        return ColorEnums[color].replace(/\${string}/, str);
    }
}