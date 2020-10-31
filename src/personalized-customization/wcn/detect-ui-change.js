// const inquirer = require('inquirer');
// const Ejs = require('../../../utils/ejs');
const shell = require('shelljs');
const execSync = require('child_process').execSync; //同步子进程
const ShellUtil = require('../../../utils/shell');
const { wcxUIDetect } = require('../../../utils/enums');
const logUtil = require('../../../utils/log');
const { validateUIProxy } = require('../../../utils/config-vlidator');

// 检测UI变动
module.exports = async function detectUIChange() {
    // 获取到配置文件
    const shellUtil = new ShellUtil();
    /**
     * uiRepoAddress UI仓库地址
     * proxy UI仓库文件映射
     */
    const config = shellUtil.requireFileFromScriptRoot(wcxUIDetect);
    if (!config) {
        return logUtil.error('请设置配置文件: elfincmd pc');
    }
    validateUIProxy(config);
    // 进入到UI仓库
    shell.cd(config.uiRepoAddress);

    const diffStr = execSync('git diff --stat master origin/master').toString().trim();
    const diffArr = diffStr.match(/dist.*(.json|.wxml|.wxss|.js)/g);

    for (let item of diffArr) {
        const proxy = config.proxy.find(e => e.source === item)
        if (proxy) {
            logUtil.logGreen(`文件: ${proxy.target} 存在变动，请及时同步，UI映射: ${config.uiRepoAddress}/${proxy.source}`);
        }
    }
};