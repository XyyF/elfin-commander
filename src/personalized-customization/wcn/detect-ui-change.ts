import fs from 'fs';
import shell from 'shelljs';
import path from 'path';
import { execSync } from 'child_process'; // 同步子进程
import shellUtil from '../../../utils/shell';
import enums from '../../../utils/enums';
import logUtil from '../../../utils/log';
import vlidator from '../../../utils/config-vlidator';

// 检测UI变动
export default async function detectUIChange() {
  logUtil.log('elfincmd pc detectUI start');
  // 获取到配置文件
  /**
   * uiRepoAddress UI仓库地址
   * proxy UI仓库文件映射
   * branch UI仓库分支名
   */
  const config = shellUtil.requireFileFromScriptRoot(enums.wcxUIDetect);
  if (!config) {
    return logUtil.error('请设置配置文件: elfincmd pc');
  }
  vlidator.validateUIProxy(config);
  if (!fs.existsSync(config.uiRepoAddress)) {
    return logUtil.error(`UI工程目录: ${config.uiRepoAddress}不存在，请检查配置项`);
  }
  // 进入到UI仓库
  shell.cd(config.uiRepoAddress);
  logUtil.log(`进入UI工程目录: 【${path.resolve(process.cwd(), './')}】`);

  const branch = config.branch || 'master';
  const diffStr = execSync(`git diff --stat ${branch} origin/${branch}`).toString().trim();
  const diffArr = diffStr.match(/dist.*(.json|.wxml|.wxss|.js)/g);
  logUtil.log(`获取 【${branch}】 分支文件diff`);

  let related = '';
  let unRelated = '';
  for (const item of (diffArr || [])) {
    const proxy = config.proxy.find((e: any) => e.source === item);
    if (proxy) {
      const desc = proxy.desc ? `【${proxy.desc}】` : '';
      related += `业务文件: ${proxy.target} ${desc}| UI文件: ${config.uiRepoAddress}/${item}\n`;
    } else {
      unRelated += `UI文件: ${config.uiRepoAddress}/${item} \n`;
    }
  }
  logUtil.log('以下文件存在变动，请及时同步');
  logUtil.logGreen(related.trim());
  logUtil.log('以下文件存在变动,但未建立关联，请及时同步');
  logUtil.logGreen(unRelated.trim());

  logUtil.log('elfincmd pc detectUI end');
};
