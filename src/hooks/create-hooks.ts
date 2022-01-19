import fs from 'fs';
import logUtil from '../../utils/log';
import enums from '../../utils/enums';
import ejs from '../../utils/ejs';
import npm from '../../utils/npm';

export default function createHooks() {
  // 配置文件
  if (fs.existsSync(enums.huskyConfig)) {
    logUtil.warning('external_init file exist');
  } else {
    ejs.renderTemplate(enums.huskyConfigTpl, enums.huskyConfig);

    logUtil.success(`external_init file: ${enums.huskyConfig}`);
  }

  // 安装依赖
  npm.installDependencies('husky@4.3.8', { dev: true });
}
