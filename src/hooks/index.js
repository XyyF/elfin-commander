/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const commitMsgShell = require('./commit-msg');

const ExteHooksCommand = {
    EPC: 'external-post-checkout',
    CM: 'commit-msg',
};

function external(command, options) {
    shell.echo(`start elfincmd hooks, command=${command}`);

    if (command === ExteHooksCommand.EPC) {
        // cloneShell();
    } else if (command === ExteHooksCommand.CM) {
        commitMsgShell();
    }

    shell.echo(`end elfincmd hooks ${command}`);
};

module.exports = external;