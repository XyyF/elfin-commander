const EjsAPI = require('./ejsAPI');

module.exports = class Ejs extends EjsAPI {
	constructor() {
		super()
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
}

function firstUpperCase(str) {
	return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}
