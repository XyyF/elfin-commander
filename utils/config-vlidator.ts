/**
 * Created by rengar on 2020/6/17.
 */

export default {
  validate,
  validateUIProxy,
};

interface SourceConfig {
  sshAddress: string;
}

/**
 * 校验.elfingit config文件
 */
function validate(configs: SourceConfig[]) {
  if (Object.prototype.toString.call(configs) !== '[object Array]') {
    throw new Error('Error validate configs: 错误的数据格式');
  }
  if (configs.length === 0) {
    throw new Error('Error validate configs: 空数组');
  }
  for (const config of configs) {
    validateSource(config);
  }
}

function validateSource(config: SourceConfig) {
  if (!config.sshAddress) {
    throw new Error('Error validate configs: sshAddress字段是必须的');
  } else if (!/^git@.*:.*\.git$/.test(config.sshAddress)) {
    throw new Error('Error validate configs: sshAddress不是有效的ssh repo地址');
  }
}

interface UIConfig {
  uiRepoAddress: string;
  proxy: string;
}

/**
 * 校验.ui-proxy.js config文件
 */
function validateUIProxy(config: UIConfig) {
  if (Object.prototype.toString.call(config) !== '[object Object]') {
    throw new Error('Error validate config: 错误的数据格式');
  }
  if (!config.uiRepoAddress || !config.proxy) {
    throw new Error('Error validate config: 数据缺失');
  }
  if (Object.prototype.toString.call(config.proxy) !== '[object Array]') {
    throw new Error('Error validate config proxy: 错误的数据格式');
  }
}
