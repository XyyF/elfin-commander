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

}

function validateSource(config) {
    if (!config.source) {
        throw new Error(`Error validate configs: source is require`)
    }
}