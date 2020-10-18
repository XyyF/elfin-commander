const inquirer = require('inquirer');
const { renderByTempalte } = require('../../../utils/ejs');

// 改造 未成年页面js文件
module.exports = async function retrofitJs() {
	const { action } = await inquirer.prompt([
		{
			name: 'action',
			type: 'input',
			message: '请输入文件名:',
		},
	]);

	if (!action) return;

	renderByTempalte('templates/wcn/page.ejs', {
		PageName: firstUpperCase(action),
		__outName: `${action}.js`,
	});
};

function firstUpperCase(str) {
	return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
