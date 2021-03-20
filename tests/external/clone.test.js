const fs = require('fs');
const path = require('path');
const initShell = require('../../src/external/init');
const cloneShell = require('../../src/external/clone');
const shell = require('shelljs');
const shellAPI = require('../../utils/shell');

describe('elfincmd external clone ', () => {
  describe('monorepo', () => {
    it('初始化执行clone', async () => {
      // 读取文件内容
      const exterContext = fs.readFileSync('.elfin.external.js', 'utf-8');
      // 进入tests目录 && 初始化 .elfin.external.js
      shell.cd('./tests');
      await initShell();
      // 输入文件内容
      fs.writeFileSync('.elfin.external.js', exterContext);
      // clone依赖
      await cloneShell({ mono: true });
      // 验证文件初始化完成
      const result = fs.existsSync('externals/elfin-eslint');
      // 删除相关文件 以及 文件夹
      fs.unlinkSync('.elfin.external.js');
      shellAPI.rmDir(path.join('externals'));
      expect(result).toEqual(true);
      // 回退文件目录
      shell.cd('..');
    });

    it('已经存在依赖项目', async () => {

    });
  });
});
