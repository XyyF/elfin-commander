/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const commitMsgShell = require('./commit-msg');
const logUtil = require('../../utils/log');

const ExteHooksCommand = {
    EPC: 'post-checkout',
    CM: 'commit-msg',
};

function hooks(command) {
    shell.echo(`start elfincmd hooks, command=${command}`);

    if (command === ExteHooksCommand.EPC) {
        // cloneShell();
    } else if (command === ExteHooksCommand.CM) {
        commitMsgShell();
    } else {
        logUtil.error(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd hooks, command=${command}`);
};

module.exports = hooks;
