/**
 * Created by rengar on 2020/10/13.
 */
import shell from 'shelljs';
import inquirer from 'inquirer';

import wcn from './wcn';
import canledar from './canledar';

async function pc() {
  shell.echo('start elfincmd pc');

  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: '请选择目标工程:',
      choices: [
        { name: '未成年', value: 'wcn' },
        { name: '日历ics', value: 'canledar' },
      ],
      default: 'wcn',
    }
  ]);

  if (action === 'wcn') {
    await wcn();
  } else if (action === 'canledar') {
    await canledar();
  }

  shell.echo('end elfincmd pc');
};

export default pc;
