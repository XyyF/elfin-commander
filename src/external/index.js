/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const cloneShell = require('./clone');
const initShell = require('./init');
const installShell = require('./install');
const { warning } = require('../../utils/log');

const ExteErnalCommand = {
    Init: 'init',
    Clone: 'clone',
    Install: 'install',
};

function external(command) {
    shell.echo(`start elfincmd external, command=${command}`);

    if (command === ExteErnalCommand.Clone) {
        cloneShell();
    } else if (command === ExteErnalCommand.Install) {
        installShell();
    } else if (command === ExteErnalCommand.Init) {
        initShell();
    } else {
        warning(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd external ${command}`);
};

module.exports = external;