/**
 * Created by rengar on 2020/6/17.
 */

module.exports = {
    validate,
    validateUIProxy,
};

/**
 * 校验.elfingit config文件
 */
function validate(configs) {
    if (Object.prototype.toString.call(configs) !== '[object Array]') {
        throw new Error('Error validate configs: 错误的数据格式');
    }
    for (const config of configs) {
        validateSource(config);
    }
}

function validateSource(config) {
    if (!config.sshAddress) {
        throw new Error(`Error validate configs: sshAddress字段是必须的`);
    } else if (!/^git@.*:.*\.git$/.test(config.sshAddress)) {
        throw new Error(`Error validate configs: sshAddress不是有效的ssh repo地址`);
    }
}

/**
 * 校验.ui-proxy.js config文件
 */
function validateUIProxy(config) {
    if (Object.prototype.toString.call(config) !== '[object Object]') {
        throw new Error('Error validate config: 错误的数据格式');
    }
    if (!config.uiRepoAddress || !config.proxy) {
        throw new Error('Error validate config: 数据缺失');
    }
    if (Object.prototype.toString.call(config.proxy) !== '[object Array]') {
        throw new Error('Error validate config proxy: 错误的数据格式');
    }
}
