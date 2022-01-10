/**
 * Created by rengar on 2020/10/13.
 */
import shell from 'shelljs';
import logUtil from '../../utils/log';

import commitMsgShell from './commit-msg';
import createHooks from './create-hooks';

enum HookCommand {
  NONE = 'undefined',
  EPC = 'post-checkout',
  CM = 'commit-msg',
}

function hooks(command: HookCommand) {
  shell.echo(`start elfincmd hooks, command=${command}`);

  if ((command + '') === HookCommand.NONE) {
    createHooks();
  } else if (command === HookCommand.CM) {
    commitMsgShell();
  } else {
    logUtil.error(`不存在的命令: command=${command}`);
  }

  shell.echo(`end elfincmd hooks, command=${command}`);
};

export default hooks;
