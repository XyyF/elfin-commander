const fs = require('fs');
const initShell = require('../../src/external/init');
const shell = require('shelljs');

describe('elfincmd external init ', () => {
  it('第一次执行init', async () => {
    // 读取文件内容
    const exterContext = fs.readFileSync('.elfin.external.js', 'utf-8');
    // 删除文件
    fs.unlinkSync('.elfin.external.js');
    // 初始化文件
    await initShell();
    const exterCopyContext = fs.readFileSync('.elfin.external.js', 'utf-8');
    const exterTempContext = fs.readFileSync('./templates/.elfin.external.ejs', 'utf-8');
    expect(exterCopyContext).toEqual(exterTempContext);
    // 还原文件
    fs.writeFileSync('.elfin.external.js', exterContext);
  });

  it('再次执行init', async () => {
    shell.echo = jest.fn();
    // 读取文件内容
    const exterContext = fs.readFileSync('.elfin.external.js', 'utf-8');

    await initShell();
    expect(shell.echo).toBeCalledTimes(3);
    expect(shell.echo).toHaveBeenCalledWith('end elfincmd external init');
    expect(shell.echo).toHaveBeenCalledWith('\x1B[43m\x1B[30m WARNING \x1B[0mexternal init file exist');
    expect(shell.echo).toHaveBeenCalledWith('end elfincmd external init');
    const exterCopyContext = fs.readFileSync('.elfin.external.js', 'utf-8');
    expect(exterCopyContext).toEqual(exterContext);
  });
});
