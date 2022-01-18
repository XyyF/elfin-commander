import fs from 'fs';
import shell from 'shelljs';
import logUtil from '../../utils/log';
import enums from '../../utils/enums';
import ejs from '../../utils/ejs';

export default function createHooks() {
  shell.echo('start elfincmd create_hooks');

  if (fs.existsSync(enums.huskyConfig)) {
    logUtil.warning('external_init file exist');
  } else {
    ejs.renderTemplate(enums.huskyConfigTpl, enums.huskyConfig);

    shell.echo(`external_init file: ${enums.huskyConfig}`);
  }

  shell.echo('end elfincmd external_init');
}
