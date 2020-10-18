/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const { getRepoFromSource } = require('../../utils/git');
const { requireFileFromElfinRoot } = require('../../utils/shell');
const { warning } = require('../../utils/log');
const { validate } = require('../../utils/config-vlidator');
const { fileName } = require('../../utils/enums');

function clone() {
    shell.echo('start elfincmd external clone');

    // 获取到配置文件
    const configs = requireFileFromElfinRoot(fileName);
    validate(configs);
    // 回退目录
    shell.cd('..');

    for (let config of configs) {
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
            warning(`依赖工程 [${name}] 已经存在`);
        }
    }

    shell.echo('end elfincmd external clone');
}

module.exports = clone