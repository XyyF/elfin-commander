/**
 * Created by rengar on 2020/6/17.
 */
import shell from 'shelljs';
import fs from 'fs';
import logUtil from '../../utils/log';
import enums from '../../utils/enums';
import ejs from '../../utils/ejs';

async function init() {
  shell.echo('start elfincmd external_init');

  if (fs.existsSync(enums.fileName)) {
    logUtil.warning('external_init file exist');
  } else {
    ejs.renderExternal();

    shell.echo(`external_init file: ${enums.fileName}`);
  }

  shell.echo('end elfincmd external_init');
}

export default () => {
  return init().catch((err) => {
    logUtil.error(`external init error: ${err}`);
    process.exit(1);
  });
};
