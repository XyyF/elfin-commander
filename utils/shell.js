/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');

module.exports = {
    loadFile,
}

function loadFile(relativePath) {
    const filePath = `${shell.pwd().stdout}${path.sep}${relativePath}`;
    shell.echo(`Loading file: ${filePath}`);
    try {
        return fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
        shell.echo(`Error Loading file: ${filePath}`);
        throw e;
    }
}