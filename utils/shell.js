/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs')
const path = require('path')

module.exports = {
    getFileContent,
}

function getFileContent(relativePath) {
    try {
        const filePath = `${shell.pwd().stdout}${path.sep}${relativePath}`
        return require(filePath)
    } catch (e) {
        throw e
    }
}