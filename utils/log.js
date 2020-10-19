const LogAPI = require('./logAPI');

class Log extends LogAPI {
    constructor() {
        super()
    }

    warning(str) {
        return this._log(this._getColorLog('WARNING', 'yellow') + str);
    }

    error(str) {
        return this._log(this._getColorLog('ERROR', 'red') + str);
    }

    logYellow(str) {
        return this._log(this._getColorLog(str, 'yellow'));
    }

    log(str) {
        return this._log(str);
    }
}

module.exports = new Log();