import shell from 'shelljs';

// 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
// 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色
// \x1B[背景色编号m\x1B[字色编号m  ~~  \x1B[0m
const ColorEnums = {
  yellow: '\x1B[40m\x1B[33m ${string} \x1B[0m',
  red: '\x1B[40m\x1B[31m ${string} \x1B[0m',
  green: '\x1B[40m\x1B[32m ${string} \x1B[0m',
};

const BgColorEnums = {
  yellow: '\x1B[43m\x1B[30m ${string} \x1B[0m',
  red: '\x1B[41m\x1B[30m ${string} \x1B[0m',
  green: '\x1B[42m\x1B[30m ${string} \x1B[0m',
};

type Color = 'yellow' | 'red' | 'green';

export default class LogAPI {
  _log(...strs: string[]) {
    return shell.echo(...strs);
  }

  _getBgColorLog(str: string, color: Color) {
    return BgColorEnums[color].replace(/\${string}/, str);
  }

  _getColorLog(str: string, color: Color) {
    return ColorEnums[color].replace(/\${string}/, str);
  }
};
