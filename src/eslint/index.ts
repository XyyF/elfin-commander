/**
 * Created by rengar on 2020/10/13.
 */
import logUtil from '../../utils/log';

import createEslint from './create-eslint';

enum HookCommand {
  NONE = '',
}

function hooks(command: HookCommand) {
  command = command || HookCommand.NONE;

  if (command === HookCommand.NONE) {
    createEslint();
  } else {
    logUtil.error(`不存在的命令: command=${command}`);
  }
};

export default hooks;
