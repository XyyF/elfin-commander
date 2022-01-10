/**
 * Created by rengar on 2020/6/17.
 */
import shell from 'shelljs';
import git from '../../utils/git';
import shellUtil from '../../utils/shell';
import logUtil from '../../utils/log';
import vlidator from '../../utils/config-vlidator';
import enums from '../../utils/enums';

async function install(options: any) {
  shell.echo('start elfincmd external_install');

  // 获取到配置文件
  const configs = shellUtil.requireFileFromScriptRoot(enums.fileName);
  vlidator.validate(configs);

  if (options.multi) {
    // 回退目录
    shell.cd('..');
  } else if (options.mono) {
    shell.cd('./externals');
  } else {
    return Promise.reject('错误的options选项');
  }

  for (const config of configs) {
    const name = git.getRepoFromSource(config.sshAddress);

    if (config.skipInstall) {
      logUtil.warning(`external_install: ${name}仓库跳过安装依赖`);
      continue;
    };

    // 是否已经clone
    if (shell.test('-d', name)) {
      // 进入项目
      shell.cd(name);
      shell.echo(`external_install: start install [${name}]`);
      // clone
      const result = shell.exec('npm install');
      // 提示错误日志
      if (result && result.code != 0) {
        logUtil.error(result.stderr);
      }
      shell.echo(`external_install: finish install [${name}]`);
      // 回退目录
      shell.cd('..');
    } else {
      logUtil.error(`external_install: ${name}仓库不存在`);
    }
  }
  shell.echo('end elfincmd external_install');
}

export default (options: any) => {
  return install(options).catch((err) => {
    logUtil.error(`external install error: ${err}`);
    process.exit(1);
  });
};
