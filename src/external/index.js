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
    // 默认使用multi mode
    if (!options.multi && !options.mono) {
        options.multi = true;
    }
    shell.echo(`可选参数：multi=${options.multi}, mono=${options.mono}`);

    if (command === ExteErnalCommand.Clone) {
        cloneShell(options);
    } else if (command === ExteErnalCommand.Install) {
        installShell(options);
    } else if (command === ExteErnalCommand.Init) {
        initShell();
    } else {
        logUtil.error(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd external, command=${command}`);
};

module.exports = external;
