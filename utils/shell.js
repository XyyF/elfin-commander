/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

module.exports = {
    loadFileFromRoot,
    loadFlieFromCwd,
    requireFile,
}

/**
 * 加载模板文件内容
 * @param {string} relativePath 相对根目录的路径 
 */
function loadFileFromRoot(relativePath) {
    return loadFile(relativePath, `${shell.pwd().stdout}${path.sep}`);
}

function loadFlieFromCwd(relativePath) {
    return loadFile(relativePath, process.cwd());
}

function loadFile(relativePath, rootPath) {
    const filePath = `${rootPath}${relativePath}`;
    try {
        return fs.readFileSync(filePath, 'utf-8').trim();
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}

/**
 * 导入文件
 * @param {string} relativePath 相对根目录的灵 
 */
function requireFile(relativePath) {
    const filePath = `${shell.pwd().stdout}${path.sep}${relativePath}`;
    try {
        return require(filePath);
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}