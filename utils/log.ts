import LogAPI from './logAPI';

class Log extends LogAPI {
  warning(str: string) {
    return this._log(this._getBgColorLog('WARNING', 'yellow') + str);
  }

  error(str: string) {
    return this._log(this._getBgColorLog('ERROR', 'red') + str);
  }

  logBgYellow(str: string) {
    return this._log(this._getBgColorLog(str, 'yellow'));
  }

  logGreen(str: string) {
    return this._log(this._getColorLog(str, 'green'));
  }

  log(...strs: string[]) {
    return this._log(...strs);
  }
}

export default new Log();
