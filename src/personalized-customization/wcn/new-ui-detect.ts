import shell from 'shelljs';
import fs from 'fs';
import enums from '../../../utils/enums';
import logUtil from '../../../utils/log';
import ejs from '../../../utils/ejs';

// 新建.ui.detect.js文件
export default async function newUIDetect() {
  logUtil.log('elfincmd pc newUIDetect start');

  if (fs.existsSync(enums.wcxUIDetect)) {
    logUtil.warning('init file exist');
  } else {
    ejs.renderUIDetect();

    shell.echo(`init file: ${enums.wcxUIDetect}`);
  }

  logUtil.log('elfincmd pc newUIDetect end');
};
