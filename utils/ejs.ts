import EjsAPI from './ejsAPI';

class Ejs extends EjsAPI {
  renderWcnPage(fileName: string) {
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

  renderICS(options: any) {
    return this._renderByTempalte('templates/canledar/base.ejs', Object.assign({
      __outName: '.ics',
      uid: `elfincmd_${Date.now()}`,
    }, options));
  }
}

function firstUpperCase(str: string) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export default new Ejs();
