/**
 * Created by rengar on 2020/6/17.
 */
const shell = require('shelljs');
const fs = require('fs');
const logUtil = require('../../utils/log');
const { fileName } = require('../../utils/enums');
const ejs = require('../../utils/ejs');

async function init() {
    shell.echo('start elfincmd external_init');

    if (fs.existsSync(fileName)) {
        logUtil.warning('external_init file exist');
    } else {
        ejs.renderExternal();

        shell.echo(`external_init file: ${fileName}`);
    }

    shell.echo('end elfincmd external_init');
}

module.exports = (...args) => {
    return init(...args).catch((err) => {
        logUtil.error(`external init error: ${err}`);
        process.exit(1);
    });
};
