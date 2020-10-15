/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const createShell = require('./create');
const { warning } = require('../../utils/log');

const ExteHooksCommand = {
    Create: 'create',
};

function wcn(command, options) {
    shell.echo(`start elfincmd wcn, command=${command}`);

    if (command === ExteHooksCommand.Create) {
        createShell();
    } else {
        warning(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd wcn ${command}`);
};

module.exports = wcn;