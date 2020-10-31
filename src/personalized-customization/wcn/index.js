const shell = require('shelljs');
const inquirer = require('inquirer');

const retrofitJs = require('./retrofit-js');
const detectUIChange = require('./detect-ui-change');
const newUIDetect = require('./new-ui-detect');

module.exports = async function create(options) {
    shell.echo('start elfincmd pc wcn');

    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: '请选择目标行为:',
            choices: [
                { name: '检测重构UI变动', value: 'detectUIChange' },
                { name: '改造.js文件', value: 'retrofitJs' },
                { name: '新建.ui.detect.js文件', value: 'newUIDetect' },
            ],
            default: 'detectUIChange',
        },
    ]);

    if (action === 'retrofitJs') {
        await retrofitJs();
    } else if (action === 'detectUIChange') {
        await detectUIChange();
    } else if (action === 'newUIDetect') {
        await newUIDetect();
    }

    shell.echo('end elfincmd pc wcn');
}