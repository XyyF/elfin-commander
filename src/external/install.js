/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const { getRepoFromSource } = require('../../utils/git');
const shellUtil = require('../../utils/shell');
const {validate} = require('../../utils/config-vlidator');
const { fileName } = require('../../utils/enums');

async function install(options) {
    shell.echo('start elfincmd external install');

    // 获取到配置文件
    const configs = shellUtil.requireFileFromScriptRoot(fileName);
    validate(configs);

    if (options.multi) {
        // 回退目录
        shell.cd('..');
    } else if (options.mono) {
        shell.cd('./externals');
    } else {
        throw new Error('错误的options选项');
    }

    for (const config of configs) {
        if (config.skipInstall) continue;

        const name = getRepoFromSource(config.sshAddress);
        // 是否已经init
        if (shell.test('-d', name)) {
            // 进入项目
            shell.cd(name);
            shell.echo(`start install [${name}]`);
            // clone
            shell.exec('npm install');
            shell.echo(`finish install [${name}]`);
            // 回退目录
            shell.cd('..');
        } else {
            throw new Error(`Error elfincmd external install: ${name}仓库不存在`);
        }
    }
    shell.echo('end elfincmd external install');
}

module.exports = (...args) => {
    return install(...args).catch((err) => {
        logUtil.error(`external install error: ${err}`);
        process.exit(1);
    });
};
