const inquirer = require('inquirer');
const ejs = require('ejs');
const fs = require('fs');
const { loadFileFromRoot, loadFlieFromCwd } = require('../../../utils/shell');

// 改造 未成年页面js文件
module.exports = async function retrofitJs() {
    const { action } = await inquirer.prompt([
        {
            name: 'action',
            type: 'input',
            message: '请输入文件名:',
        }
    ]);

    if (!action) return

    // 读取模板内容
    const template = loadFileFromRoot('templates\\wcn\\page.ejs');
    // 转化模板内容
    const trans = ejs.render(template, { PageName: firstUpperCase(action) });
    // 写内容到文件中
    fs.writeFileSync(`${process.cwd()}\\${action}.js`, trans);
}

function firstUpperCase(str) {
    return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
}