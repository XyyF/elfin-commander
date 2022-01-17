/**
 * Created by rengar on 2020/10/13.
 */
import inquirer from 'inquirer';
import commitHelp from './commit-msg-help';

enum DocsCommand {
  CommitMsgHelp = '1',
}

async function docs() {
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: '请选择文档帮助类型:',
      choices: [
        { name: 'git commit注释查看', value: DocsCommand.CommitMsgHelp },
      ],
      default: DocsCommand.CommitMsgHelp,
    }
  ]);

  if (action == DocsCommand.CommitMsgHelp) {
    commitHelp();
  }
};

export default docs;
