/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const {loadFile} = require('../../utils/shell');
const {fileName, templatePath} = require('./__utils/enums');

async function init() {
    shell.echo('start elfincmd external init');

    if (fs.existsSync(fileName)) {
        // TODO warning警示
        shell.echo('external init file exist');
    } else {
        const template = loadFile(templatePath);
        fs.writeFileSync(fileName, template);
        
        shell.echo(`external init file: ${fileName}`);
    }

    shell.echo('end elfincmd external init');
}

module.exports = (...args) => {
    return init(...args).catch((err) => {
        // TODO error警示
        shell.echo(`external init error: ${err}`);
        process.exit(1);
    })
}