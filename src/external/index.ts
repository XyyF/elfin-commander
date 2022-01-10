/**
 * Created by rengar on 2020/10/13.
 */
import shell from 'shelljs';
import cloneShell from './clone';
import initShell from './init';
import installShell from './install';
import logUtil from '../../utils/log';

enum CommandType {
  Init = 'init',
  Clone = 'clone',
  Install = 'install',
}

interface ExternalOptions {
  multi?: boolean,
  mono?: boolean,
}

function externalCommand(command: CommandType, options: ExternalOptions) {
  shell.echo(`start elfincmd external, command=${command}`);
  // 默认使用multi mode
  if (!options.multi && !options.mono) {
    options.multi = true;
  }
  shell.echo(`可选参数：multi=${options.multi}, mono=${options.mono}`);

  if (command === CommandType.Clone) {
    cloneShell(options);
  } else if (command === CommandType.Install) {
    installShell(options);
  } else if (command === CommandType.Init) {
    initShell();
  } else {
    logUtil.error(`不存在的命令: command=${command}`);
  }

  shell.echo(`end elfincmd external, command=${command}`);
};

export default externalCommand;
