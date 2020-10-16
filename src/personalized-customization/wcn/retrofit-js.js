const inquirer = require('inquirer');

// 改造 未成年页面js文件
module.exports = async function retrofitJs() {
    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'input',
            message: '请输入文件名:',
        }
    ]);
}