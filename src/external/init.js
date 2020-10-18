/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const fs = require('fs');
const { warning, error } = require('../../utils/log');
const { fileName, templatePath } = require('../../utils/enums');

const { renderByTempalte } = require('../../utils/ejs');

async function init() {
    shell.echo('start elfincmd external init');

    if (fs.existsSync(fileName)) {
        warning('external init file exist');
    } else {
        renderByTempalte(templatePath, {
            __outName: fileName,
        });

        shell.echo(`external init file: ${fileName}`);
    }

    shell.echo('end elfincmd external init');
}

module.exports = (...args) => {
    return init(...args).catch((err) => {
        error(`external init error: ${err}`);
        process.exit(1);
    })
}