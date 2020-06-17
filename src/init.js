/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs')
const {getRepoFromSource} = require('../utils/git')
const {loadFile} = require('../utils/shell')

function init() {
    shell.echo(`start elfingit init`)
    // 获取到配置文件
    const configs = loadFile('.elfingit.js')
    // 回退目录
    shell.cd('..')

    for (let config of configs) {
        const name = getRepoFromSource(config.source)
        // 是否已经init
        if (!shell.test('-d', name)) {
            shell.echo(`start clone [${name}]`)
            // clone
            shell.exec(`git clone ${config.source}`)
            shell.echo(`finish clone [${name}]`)
        }
        else {
            shell.echo(`依赖工程 [${name}] 已经存在`)
        }
    }
    shell.echo(`finish elfingit init`)
}

module.exports = init