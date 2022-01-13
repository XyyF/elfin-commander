import fs from 'fs';
import shell from 'shelljs';
import logUtil from '../../utils/log';
import enums from '../../utils/enums';
import ejs from '../../utils/ejs';

export default function createHooks() {
  shell.echo('start elfincmd create_hooks');

  if (fs.existsSync(enums.eslintFileName)) {
    logUtil.warning('external_init file exist');
  } else {
    ejs.renderTemplate('.eslintrc.ejs', enums.eslintFileName);

    shell.echo(`external_init file: ${enums.eslintFileName}`);
  }

  shell.echo('end elfincmd external_init');
}
