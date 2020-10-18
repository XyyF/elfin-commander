/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

module.exports = {
    loadFileFromElfinRoot,
    loadFlieFromScript,
    requireFileFromElfinRoot,
    writeFlieFromScript,
}

/**
 * 加载模板文件内容 【相对elfin工程根目录的路径】
 * @param {string} relativePath 
 */
function loadFileFromElfinRoot(relativePath) {
    return loadFile(path.resolve(__dirname, `..${path.sep}${relativePath}`));
}

/**
 * 加载模板文件内容 【相对当前脚本命令执行目录】
 * @param {*} relativePath 
 */
function loadFlieFromScript(relativePath) {
    return loadFile(path.resolve(process.cwd(), relativePath));
}

function loadFile(filePath) {
    try {
        return fs.readFileSync(filePath, 'utf-8').trim();
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}

/**
 * 导入文件 【相对elfin工程根目录的路径】
 * @param {string} relativePath 
 */
function requireFileFromElfinRoot(relativePath) {
    return requireFile(path.resolve(__dirname, `..${path.sep}${relativePath}`));
}

function requireFile(filePath) {
    try {
        return require(filePath);
    } catch (e) {
        shell.echo(`Error require file: ${filePath}`);
        throw e;
    }
}

/**
 * 写文件 【相对当前脚本命令执行目录】
 */
function writeFlieFromScript(relativePath, template) {
    return writeFile(path.resolve(process.cwd(), relativePath), template);
}

function writeFile(filePath, template) {
    try {
        return fs.writeFileSync(filePath, template);
    } catch (e) {
        shell.echo(`Error Write file: ${filePath}`);
        throw e;
    }
}