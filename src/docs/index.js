/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const inquirer = require('inquirer');
const commitHelp = require('./commit-msg-help');

const ExteDocsCommand = {
    CMH: 'commit-msg-help',
};

async function docs() {
    shell.echo('start elfincmd docs');

    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: '请选择文档类型:',
            choices: [
                { name: 'git commit注释帮助', value: ExteDocsCommand.CMH },
            ],
            default: ExteDocsCommand.CMH,
        }
    ]);

    if (action === ExteDocsCommand.CMH) {
        commitHelp()
    }

    shell.echo('end elfincmd docs');
};

module.exports = docs;