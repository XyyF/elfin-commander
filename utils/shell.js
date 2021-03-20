/**
 * Created by rengar on 2020/6/17.
 */
const fs = require('fs');
const ShellAPI = require('./shellAPI');

class Shell extends ShellAPI {
    constructor() {
        super();
    }

    loadFileFromElfinRoot(relativePath) {
        return this._loadFile(this._getRootPath(relativePath));
    }

    loadFlieFromScript(relativePath) {
        return this._loadFile(this._getCurrentPath(relativePath));
    }

    requireFileFromElfinRoot(relativePath) {
        return this._requireFile(this._getRootPath(relativePath));
    }

    requireFileFromScriptRoot(relativePath) {
        return this._requireFile(this._getCurrentPath(relativePath));
    }

    writeFlieFromScript(relativePath, template) {
        return this._writeFile(this._getCurrentPath(relativePath), template);
    }

    rmDir(filePath) {
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

module.exports = new Shell();
