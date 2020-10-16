const shell = require('shelljs');
const inquirer = require('inquirer');

const retrofitJs = require('./retrofit-js');

module.exports = async function create(options) {
    shell.echo('start elfincmd pc wcn');

    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: '请选择目标行为:',
            choices: [
                { name: '改造.js文件', value: 'retrofitJs' },
            ],
            default: 'retrofitJs',
        }
    ]);

    if (action === 'retrofitJs') {
        await retrofitJs()
    }

    shell.echo('end elfincmd pc wcn');
}