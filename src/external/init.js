/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const fs = require('fs');
const logUtil = require('../../utils/log');
const { fileName } = require('../../utils/enums');
const Ejs = require('../../utils/ejs');

async function init() {
    shell.echo('start elfincmd external init');

    if (fs.existsSync(fileName)) {
        logUtil.warning('external init file exist');
    } else {
        const ejs = new Ejs();
        ejs.renderExternal();

        shell.echo(`external init file: ${fileName}`);
    }

    shell.echo('end elfincmd external init');
}

module.exports = (...args) => {
    return init(...args).catch((err) => {
        logUtil.error(`external init error: ${err}`);
        process.exit(1);
    })
}