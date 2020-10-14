/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

module.exports = {
    loadFile,
    requireFile,
}

function loadFile(relativePath) {
    try {
        const filePath = `${shell.pwd().stdout}${path.sep}${relativePath}`;
        return fs.readFileSync(filePath, 'utf-8').trim();
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}

function requireFile(relativePath) {
    const filePath = `${shell.pwd().stdout}${path.sep}${relativePath}`;
    shell.echo(`Loading file: ${filePath}`);
    try {
        return require(filePath);
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}