const EjsAPI = require('./ejsAPI');

class Ejs extends EjsAPI {
	constructor() {
		super();
	}

	renderWcnPage(fileName) {
		return this._renderByTempalte('templates/wcn/page.ejs', {
			PageName: firstUpperCase(fileName),
			__outName: `${fileName}.js`,
		});
	}

	renderExternal() {
		return this._renderByTempalte('templates/.elfin.external.ejs', {
            __outName: '.elfin.external.js',
        });
	}

	renderUIDetect() {
		return this._renderByTempalte('templates/wcn/.ui.detect.ejs', {
            __outName: '.ui.detect.js',
        });
	}

	renderICS(options) {
		return this._renderByTempalte('templates/canledar/base.ejs', Object.assign({
			__outName: '.ics',
			uid: `elfincmd_${Date.now()}`,
		}, options));
	}
}

function firstUpperCase(str) {
	return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

module.exports = new Ejs();
