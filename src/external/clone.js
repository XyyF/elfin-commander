/**
 * Created by rengar on 2020/6/17.
 */
const fs = require('fs');
const shell = require('shelljs');
const { getRepoFromSource } = require('../../utils/git');
const shellUtil = require('../../utils/shell');
const logUtil = require('../../utils/log');
const { validate } = require('../../utils/config-vlidator');
const { fileName } = require('../../utils/enums');

function clone(options) {
    shell.echo('start elfincmd external clone');

    // 获取到配置文件
    const configs = shellUtil.requireFileFromScriptRoot(fileName);
    validate(configs);

    if (options.multi) {
        // 回退目录
        shell.cd('..');
    } else if (options.mono) {
        if (!shell.test('-d', 'externals')) {
            fs.mkdirSync('externals');
        }
        shell.cd('./externals');
    } else {
        throw new Error('错误的options选项');
    }

    for (const config of configs) {
        const name = getRepoFromSource(config.sshAddress);
        // 是否已经init
        if (!shell.test('-d', name)) {
            shell.echo(`start clone [${name}]`);

            if (config.branch) {
                // clone & branch
                shell.exec(`git clone -b ${config.branch} ${config.sshAddress}`);
            } else {
                // clone
                shell.exec(`git clone ${config.sshAddress}`);
            }
            shell.echo(`finish clone [${name}]`);
        } else {
            logUtil.warning(`依赖工程 [${name}] 已经存在`);
        }
    }

    shell.echo('end elfincmd external clone');
}

module.exports = clone;
