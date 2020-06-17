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
    if (!config.source) {
        throw new Error(`Error validate configs: source字段是必须的`)
    } else if (!/^git@.*:.*\.git$/.test(config.source)) {
        throw new Error(`Error validate configs: source不是有效的ssh repo地址`)
    }
}