/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs')
const {getRepoFromSource} = require('../utils/git')
const {loadFile} = require('../utils/shell')
const {validate} = require('../utils/config-vlidator')

function install() {
    shell.echo(`start elfingit install`)
    // 获取到配置文件
    const configs = loadFile('.elfingit.js')
    validate(configs)
    // 回退目录
    shell.cd('..')

    for (let config of configs) {
        const name = getRepoFromSource(config.source)
        // 是否已经init
        if (shell.test('-d', name)) {
            // 进入项目
            shell.cd(name)
            shell.echo(`start install [${name}]`)
            // clone
            shell.exec('npm install')
            shell.echo(`finish install [${name}]`)
            // 回退目录
            shell.cd('..')
        } else {
            throw new Error(`Error elfingit install: ${name}仓库不存在`)
        }
    }
    shell.echo(`finish elfingit install`)
}

module.exports = install