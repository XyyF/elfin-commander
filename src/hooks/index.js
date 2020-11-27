/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const commitMsgShell = require('./commit-msg');
const logUtil = require('../../utils/log');

const ExteHooksCommand = {
    EPC: 'external-post-checkout',
    CM: 'commit-msg',
};

function hooks(command) {
    shell.echo(`start elfincmd hooks, command=${command}`);

    if (command === ExteHooksCommand.EPC) {
        // cloneShell();
    } else if (command === ExteHooksCommand.CM) {
        commitMsgShell();
    } else {
        logUtil.warning(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd hooks ${command}`);
};

module.exports = hooks;
