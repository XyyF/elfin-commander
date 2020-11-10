const LogAPI = require('./logAPI');

class Log extends LogAPI {
    constructor() {
        super();
    }

    warning(str) {
        return this._log(this._getBgColorLog('WARNING', 'yellow') + str);
    }

    error(str) {
        return this._log(this._getBgColorLog('ERROR', 'red') + str);
    }

    logBgYellow(str) {
        return this._log(this._getBgColorLog(str, 'yellow'));
    }

    logGreen(str) {
        return this._log(this._getColorLog(str, 'green'));
    }

    log(...strs) {
        return this._log(...strs);
    }
}

module.exports = new Log();