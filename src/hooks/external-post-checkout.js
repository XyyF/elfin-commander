const shell = require('shelljs');
const shellUtil = require('../../utils/shell');
// const logUtil = require('../../utils/log');
const { fileName } = require('../../utils/enums');


module.exports = function postCheckout() {
    shell.echo('start elfincmd hooks external-post-checkout');

    const params = process.env.GIT_PARAMS.split(' ');
    const checkoutType = params[2];

    if (checkoutType === '0') return;

     // 获取到配置文件
     const configs = shellUtil.requireFileFromElfinRoot(fileName);
     validate(configs);

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

    shell.echo('end elfincmd hooks external-post-checkout');
};
