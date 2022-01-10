import inquirer from 'inquirer';
import ejs from '../../../utils/ejs';

// 改造 未成年页面js文件
export default async function retrofitJs() {
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'input',
      message: '请输入文件名:',
    },
  ]);

  if (!action) return;

  ejs.renderWcnPage(action);
};
