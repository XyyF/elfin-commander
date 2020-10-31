const shell = require('shelljs');
const inquirer = require('inquirer');

const retrofitJs = require('./retrofit-js');
const detectUIChange = require('./detect-ui-change');

module.exports = async function create(options) {
    shell.echo('start elfincmd pc wcn');

    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: '请选择目标行为:',
            choices: [
                { name: '改造.js文件', value: 'retrofitJs' },
                { name: '检测重构UI变动', value: 'detectUIChange' },
            ],
            default: 'retrofitJs',
        }
    ]);

    if (action === 'retrofitJs') {
        await retrofitJs()
    } else if (action === 'detectUIChange') {
        await detectUIChange()
    }

    shell.echo('end elfincmd pc wcn');
}