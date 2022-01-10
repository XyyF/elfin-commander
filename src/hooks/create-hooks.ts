import fs from 'fs';
import shell from 'shelljs';
import logUtil from '../../utils/log';
import enums from '../../utils/enums';
import ejs from '../../utils/ejs';

export default function createHooks() {
  shell.echo('start elfincmd create_hooks');

  if (fs.existsSync(enums.huskyFileName)) {
    logUtil.warning('external_init file exist');
  } else {
    ejs.renderTemplate(`${enums.huskyFileName}.ejs`, enums.huskyFileName);

    shell.echo(`external_init file: ${enums.huskyFileName}`);
  }

  shell.echo('end elfincmd external_init');
}
