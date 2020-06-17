/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs')
const {getRepoFromSource} = require('../utils/git')

function clone(source) {
    shell.echo('start elfingit clone')
    // 获取仓库名 & 校验
    const repo = getRepoFromSource(source)
    // clone仓库
    shell.exec(`git clone ${source}`)
    // 进入主仓库目录
    shell.cd(`./${repo}`)
    // 初始化依赖仓库
    shell.exec('elfingit init')
    // install依赖仓库
    shell.exec('elfingit install')

    shell.echo('finish elfingit clone')
}

module.exports = clone