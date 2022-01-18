import shell from 'shelljs';
import path from 'path';
import fs from 'fs';

export default class ShellAPI {
  /**
   * 获取相对elfin root目录的绝对路径
   * @param {string} relativePath
   */
  _getRootPath(relativePath: string) {
    return path.resolve(__dirname, `..${path.sep}${relativePath}`);
  }

  /**
   * 获取相对 脚本命令执行时目录 的绝对路径
   * @param {string}} relativePath
   */
  _getCurrentPath(relativePath: string) {
    return path.resolve(process.cwd(), relativePath);
  }

  /**
   * 加载文件完整的内容
   * @param {string} filePath
   */
  _loadFile(filePath: string) {
    try {
      return fs.readFileSync(filePath, 'utf-8').trim();
    } catch (e) {
      shell.echo(`Error Loading file: ${filePath}`);
      throw e;
    }
  }

  /**
   * 引入文件输出的内容
   * @param {string} filePath
   */
  _requireFile(filePath: string) {
    try {
      return require(filePath);
    } catch (e) {
      shell.echo(`Error require file: ${filePath}`);
      throw e;
    }
  }

  /**
   * 写文件
   * @param {string} filePath
   * @param {*} template
   */
  _writeFile(filePath: string, template: string) {
    try {
      return fs.writeFileSync(filePath, template);
    } catch (e) {
      shell.echo(`Error Write file: ${filePath}`);
      throw e;
    }
  }

  /**
   * 移除文件夹
   * @param filePath 
   */
  _rmDir(filePath: string) {
    const files = fs.readdirSync(filePath);
    files.forEach((file) => {
      const nextFilePath = `${filePath}/${file}`;
      const states = fs.statSync(nextFilePath);
      if (states.isDirectory()) {
        this._rmDir(nextFilePath);
      } else {
        fs.unlinkSync(nextFilePath);
      }
    });
    fs.rmdirSync(filePath);
  }
};
