/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const commitMsgShell = require('./commit-msg');
const commitHelp = require('./commit-help');
const logUtil = require('../../utils/log');

const ExteHooksCommand = {
    EPC: 'external-post-checkout',
    CM: 'commit-msg',
    CMH: 'cm-help',
};

function hooks(command, options) {
    shell.echo(`start elfincmd hooks, command=${command}`);

    if (command === ExteHooksCommand.EPC) {
        // cloneShell();
    } else if (command === ExteHooksCommand.CM) {
        commitMsgShell();
    } else if (command === ExteHooksCommand.CMH) {
        commitHelp();
    } else {
        logUtil.warning(`不存在的命令: command=${command}`);
    }

    shell.echo(`end elfincmd hooks ${command}`);
};

module.exports = hooks;