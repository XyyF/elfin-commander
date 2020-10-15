const shell = require('shelljs');
const fs = require('fs');
const inquirer = require('inquirer');
const { loadFile } = require('../../utils/shell');


module.exports = function create(options) {
    shell.echo('start elfincmd wcn create');
    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: `您将创建文件类型:`,
            choices: [
                { name: '.js', value: 'js' },
            ],
        }
    ]);

    if (action === 'js') {
        const template = loadFile(templatePath);
        fs.writeFileSync(fileName, template);
    }

    shell.echo('end elfincmd wcn create');
}