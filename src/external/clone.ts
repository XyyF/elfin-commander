/**
 * Created by rengar on 2020/6/17.
 */
import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import { ChildProcess } from 'child_process';
import git from '../../utils/git';
import shellUtil from '../../utils/shell';
import logUtil from '../../utils/log';
import vlidator from '../../utils/config-vlidator';
import enums from '../../utils/enums';

async function clone(options: any) {
  shell.echo('start elfincmd external_clone');
  const dirname = path.basename(path.resolve());

  // 获取到配置文件
  const configs = shellUtil.requireFileFromScriptRoot(enums.externalConfig);
  vlidator.validate(configs);

  // 进入相应的目录
  if (options.multi) {
    shell.cd('..');
  } else if (options.mono) {
    if (!shell.test('-d', 'externals')) {
      fs.mkdirSync('externals');
    }
    shell.cd('./externals');
  } else {
    return Promise.reject('错误的options选项');
  }

  // clone相关工程
  for (const config of configs) {
    const name = git.getRepoFromSource(config.sshAddress);
    // 是否工程已经存在
    if (!shell.test('-d', name)) {
      shell.echo(`[start] clone [${name}]`);
      let result: ChildProcess;
      if (config.branch) {
        // clone & branch
        result = shell.exec(`git clone -b ${config.branch} ${config.sshAddress}`, { async: true });
      } else {
        // clone
        result = shell.exec(`git clone ${config.sshAddress}`, { async: true });
      }
      // 提示错误日志
      // 1. ssh地址不存在
      // 2. 分支不存在
      if (result && result.stderr) {
        logUtil.error(result.stderr + '');
      }
      shell.echo(`[finish] clone [${name}]`);
    } else {
      logUtil.warning(`依赖工程 [${name}] 已经存在`);
    }
  }

  // 回退相应的初始目录
  if (options.multi) {
    shell.cd(`./${dirname}`);
  } else if (options.mono) {
    shell.cd('..');
  }

  shell.echo('end elfincmd external_clone');
}

export default (options: any) => {
  return clone(options).catch((err) => {
    logUtil.error(`external clone error: ${err}`);
    process.exit(1);
  });
};
