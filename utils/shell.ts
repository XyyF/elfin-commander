/**
 * Created by rengar on 2020/6/17.
 */
import fs from 'fs';
import ShellAPI from './shellAPI';

class Shell extends ShellAPI {
  loadFileFromElfinRoot(relativePath: string) {
    return this._loadFile(this._getRootPath(relativePath));
  }

  loadFlieFromScript(relativePath: string) {
    return this._loadFile(this._getCurrentPath(relativePath));
  }

  requireFileFromElfinRoot(relativePath: string) {
    return this._requireFile(this._getRootPath(relativePath));
  }

  requireFileFromScriptRoot(relativePath: string) {
    return this._requireFile(this._getCurrentPath(relativePath));
  }

  writeFlieFromScript(relativePath: string, template: string) {
    return this._writeFile(this._getCurrentPath(relativePath), template);
  }

  rmDir(filePath: string) {
    const files = fs.readdirSync(filePath);
    files.forEach((file) => {
      const nextFilePath = `${filePath}/${file}`;
      const states = fs.statSync(nextFilePath);
      if (states.isDirectory()) {
        this.rmDir(nextFilePath);
      } else {
        fs.unlinkSync(nextFilePath);
      }
    });
    fs.rmdirSync(filePath);
  }
}

export default new Shell();
