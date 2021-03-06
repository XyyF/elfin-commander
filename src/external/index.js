/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const cloneShell = require('./clone');
const initShell = require('./init');
const installShell = require('./install');
const logUtil = require('../../utils/log');

const ExteErnalCommand = {
    Init: 'init',
    Clone: 'clone',
    Install: 'install',
};

function external(command, options) {
    shell.echo(`start elfincmd external, command=${command}`);
    shell.echo(`multi=${options.multi}, mono=${options.mono}`);

    if (command === ExteErnalCommand.Clone) {
        cloneShell(options);
    } else if (command === ExteErnalCommand.Install) {
        installShell(options);
    } else if (command === ExteErnalCommand.Init) {
        initShell();
    } else {
        logUtil.warning(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd external ${command}`);
};

module.exports = external;
