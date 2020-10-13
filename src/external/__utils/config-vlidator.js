/**
 * Created by rengar on 2020/6/17.
 */

module.exports = {
    validate,
}

/**
 * 校验.elfingit config文件
 */
function validate(configs) {
    if (Object.prototype.toString.call(configs) !== '[object Array]') {
        throw new Error('Error validate configs: 错误的数据格式')
    }
    for (let config of configs) {
        validateSource(config)
    }
}

function validateSource(config) {
    if (!config.sshAddress) {
        throw new Error(`Error validate configs: sshAddress字段是必须的`)
    } else if (!/^git@.*:.*\.git$/.test(config.sshAddress)) {
        throw new Error(`Error validate configs: sshAddress不是有效的ssh repo地址`)
    }
}