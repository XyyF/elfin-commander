/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs')
const path = require('path')

module.exports = {
    loadFile,
}

function loadFile(relativePath) {
    const filePath = `${shell.pwd().stdout}${path.sep}${relativePath}`
    shell.echo(`Loading file: ${filePath}`)
    try {
        return require(filePath)
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`)
        throw e
    }
}