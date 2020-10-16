/**
 * Created by rengar on 2020/10/13.
 */
const shell = require('shelljs');
const inquirer = require('inquirer');

const wcn = require('./wcn')

async function pc() {
    shell.echo('start elfincmd pc');

    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: '请选择目标工程:',
            choices: [
                { name: '未成年', value: 'wcn' },
            ],
            default: 'wcn',
        }
    ]);

    if (action === 'wcn') {
        await wcn()
    }

    shell.echo('end elfincmd pc');
};

module.exports = pc;