/**
 * Created by rengar on 2020/10/13.
 */
import shell from 'shelljs';
import inquirer from 'inquirer';
import commitHelp from './commit-msg-help';

enum DocsCommand {
  CMH = 'commit-msg-help',
}

async function docs() {
  shell.echo('start elfincmd docs');

  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: '请选择文档类型:',
      choices: [
        { name: 'git commit注释帮助', value: DocsCommand.CMH },
      ],
      default: DocsCommand.CMH,
    }
  ]);

  if (action === DocsCommand.CMH) {
    commitHelp();
  }

  shell.echo('end elfincmd docs');
};

export default docs;
