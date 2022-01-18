/**
 * Created by rengar on 2020/6/17.
 */
import ShellAPI from './shellAPI';

class Shell extends ShellAPI {
  /**
   * 从elfin-commander路径，read读文件全部内容
   * @param relativePath 相对路径
   */
  loadByElfinRoot(relativePath: string) {
    return this._loadFile(this._getRootPath(relativePath));
  }

  /**
   * 从Cmd路径，read读文件全部内容
   * @param relativePath 相对路径
   */
  loadByCmdPath(relativePath: string) {
    return this._loadFile(this._getCurrentPath(relativePath));
  }

  /**
   * 从Cmd路径，reqiure读文件module.exports内容
   * @param relativePath 相对路径
   */
  requireByCmdPath(relativePath: string) {
    return this._requireFile(this._getCurrentPath(relativePath));
  }

  /**
   * 从Cmd路径，write写文件内容
   * @param relativePath 相对路径
   */
  writeByCmdPath(relativePath: string, template: string) {
    return this._writeFile(this._getCurrentPath(relativePath), template);
  }
}

export default new Shell();
