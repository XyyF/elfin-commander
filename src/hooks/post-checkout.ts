import shell from 'shelljs';
// import shellUtil from '../../utils/shell';
// import logUtil from '../../utils/log';
// import enums from '../../utils/enums';


export default function postCheckout() {
  shell.echo('start elfincmd hooks_post-checkout');

  // const params = process.env.GIT_PARAMS.split(' ');
  // const checkoutType = params[2];
  // if (checkoutType === '0') return;

  // 获取到配置文件
  //  const configs = shellUtil.requireFileFromElfinRoot(enums.externalConfig);
  //  validate(configs);

  // const nowBranch = branch || gitUtils.getCurrentBranch()
  // hookLog('start to checkout branch: ', nowBranch)
  // shell.cd(configUtils.EXTERNAL_LIBRARIES_DIR)
  // for (const config of externalConfig) {
  //     shell.cd(config.name)
  //     if (config.branch && nowBranch !== 'master') {
  //         gitUtils.checkout(config.branch)
  //         hookLog(`checkout ${config.name}'s ${config.branch}`)
  //     }
  //     else {
  //         gitUtils.checkout(nowBranch)
  //         hookLog(`checkout ${config.name}'s ${nowBranch}`)
  //     }
  //     shell.cd('..')
  // }
  // shell.cd('..')
  // hookLog('finish checkout branch')

  shell.echo('end elfincmd hooks_post-checkout');
};
