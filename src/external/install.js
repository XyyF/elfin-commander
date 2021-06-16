/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const { getRepoFromSource } = require('../../utils/git');
const shellUtil = require('../../utils/shell');
const logUtil = require('../../utils/log');
const {validate} = require('../../utils/config-vlidator');
const { fileName } = require('../../utils/enums');

async function install(options) {
    shell.echo('start elfincmd external_install');

    // 获取到配置文件
    const configs = shellUtil.requireFileFromScriptRoot(fileName);
    validate(configs);

    if (options.multi) {
        // 回退目录
        shell.cd('..');
    } else if (options.mono) {
        shell.cd('./externals');
    } else {
        return Promise.reject('错误的options选项');
    }

    for (const config of configs) {
        const name = getRepoFromSource(config.sshAddress);

        if (config.skipInstall) {
            logUtil.warning(`external_install: ${name}仓库跳过安装依赖`);
            continue;
        };

        // 是否已经init
        if (shell.test('-d', name)) {
            // 进入项目
            shell.cd(name);
            shell.echo(`external_install: start install [${name}]`);
            // clone
            const result = shell.exec('npm install');
            // 提示错误日志
            if (result && result.code != 0) {
                logUtil.error(result.stderr);
            }
            shell.echo(`external_install: finish install [${name}]`);
            // 回退目录
            shell.cd('..');
        } else {
            logUtil.error(`external_install: ${name}仓库不存在`);
        }
    }
    shell.echo('end elfincmd external_install');
}

module.exports = (...args) => {
    return install(...args).catch((err) => {
        logUtil.error(`external install error: ${err}`);
        process.exit(1);
    });
};
