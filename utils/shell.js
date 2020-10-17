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
    writeFlieFromCwd,
}

/**
 * 加载模板文件内容
 * @param {string} relativePath 相对根目录的路径 
 */
function loadFileFromRoot(relativePath) {
    return loadFile(path.resolve(__dirname, `..${path.sep}${relativePath}`));
}

/**
 * 在当前 脚本命令执行目录下 加载文件
 * @param {*} relativePath 
 */
function loadFlieFromCwd(relativePath) {
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
 * 导入文件
 * @param {string} relativePath 相对根目录的灵 
 */
function requireFile(relativePath) {
    const filePath = path.resolve(__dirname, `..${path.sep}${relativePath}`);
    try {
        return require(filePath);
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}

/**
 * 写文件
 */
function writeFile(filePath, template) {
    try {
        return fs.writeFileSync(filePath, template);
    } catch (e) {
        shell.echo(`Error Write file: ${filePath}`);
        throw e;
    }
}

function writeFlieFromCwd(relativePath, template) {
    return writeFile(path.resolve(process.cwd(), relativePath), template);
}