/**
 * Created by rengar on 2020/10/13.
 */
import shell from 'shelljs';
import logUtil from '../../utils/log';

import createEslint from './create-eslint';

enum HookCommand {
  NONE = '',
}

function hooks(command: HookCommand) {
  command = command || HookCommand.NONE;
  shell.echo(`start elfincmd eslint, command=${command}`);

  if (command === HookCommand.NONE) {
    createEslint();
  } else {
    logUtil.error(`不存在的命令: command=${command}`);
  }

  shell.echo(`end elfincmd hooks, command=${command}`);
};

export default hooks;
