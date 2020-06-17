/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs')
const {getFileContent} = require('../utils/shell')

function init() {
    // 获取到配置文件
    const content = getFileContent('.elfingit.js')
    shell.echo(content[0])
}

module.exports = init