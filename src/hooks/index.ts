/**
 * Created by rengar on 2020/10/13.
 */
import logUtil from '../../utils/log';

import commitMsgShell from './commit-msg';
import createHooks from './create-hooks';

enum HookCommand {
  NONE = '',
  EPC = 'post-checkout',
  CM = 'commit-msg',
}

function hooks(command: HookCommand) {
  command = command || HookCommand.NONE;

  if (command === HookCommand.NONE) {
    createHooks();
  } else if (command === HookCommand.CM) {
    commitMsgShell();
  } else {
    logUtil.error(`不存在的命令: command=${command}`);
  }
};

export default hooks;
