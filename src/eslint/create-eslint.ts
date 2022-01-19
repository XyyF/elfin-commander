import fs from 'fs';
import inquirer from 'inquirer';
import logUtil from 'utils/log';
import enums from 'utils/enums';
import ejs from 'utils/ejs';
import npm from 'utils/npm';

enum Language {
  Javascript = '1',
  TypeScript = '2',
  Vue = '3',
}

/**
 * 流程：选择语言 -> 模板文件 -> 生成文件 -> 安装依赖
 */
export default async function createHooks() {
  // 选择语言
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: '请选择技术类型:',
      choices: [
        { name: 'javascript', value: Language.Javascript },
        { name: 'typescript', value: Language.TypeScript },
        { name: 'vue', value: Language.Vue },
      ],
      default: Language.Javascript,
    }
  ]);
  // 对应的模板文件名
  let eslintConfigTpl = enums.eslintConfigTpl;
  if (action === Language.TypeScript) eslintConfigTpl = enums.eslintConfigTplTs;
  else if (action === Language.Vue) eslintConfigTpl = enums.eslintConfigTplVue;

  // 生成模板文件
  if (fs.existsSync(enums.eslintConfig)) {
    logUtil.warning('external_init file exist');
  } else {
    ejs.renderTemplate(eslintConfigTpl, enums.eslintConfig);

    logUtil.success('模板文件.eslintrc.js生成成功');
  }

  // 安装依赖
  npm.installDependencies('@elfiner/eslint-config-elfin', { dev: true });
}
