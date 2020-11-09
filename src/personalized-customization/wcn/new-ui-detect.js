const shell = require('shelljs');
const fs = require('fs');
const { wcxUIDetect } = require('../../../utils/enums');
const logUtil = require('../../../utils/log');
const ejs = require('../../../utils/ejs');

// 新建.ui.detect.js文件
module.exports = async function newUIDetect() {
    logUtil.log('elfincmd pc newUIDetect start');

    if (fs.existsSync(wcxUIDetect)) {
        logUtil.warning('init file exist');
    } else {
        ejs.renderUIDetect();

        shell.echo(`init file: ${wcxUIDetect}`);
    }

    logUtil.log('elfincmd pc newUIDetect end');
};