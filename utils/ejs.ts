import ejs from 'ejs';
import shellUtil from './shell';

interface TemplateRenderData {
  __outName: string;
  [prop: string]: any;
}

class Ejs {
  renderTemplate(src: string, dist: string, options?: any) {
    return this._renderByTempalte('templates/' + src, Object.assign({
      __outName: dist,
    }, options));
  }

  /**
   * 根据模版渲染
   * @param {string} templatePath 形如 "templates\\wcn\\page.ejs"
   * @param {object} renderData  渲染数据
   * @param {object} renderData.__outName  输出的文件名
   */
  _renderByTempalte(templatePath: string, renderData: TemplateRenderData) {
    // 读取模板内容
    const template = shellUtil.loadByElfinRoot(templatePath);
    // 转化模板内容
    const transData = ejs.render(template, renderData);
    // 写内容到文件中
    return shellUtil.writeByCmdPath(renderData.__outName, transData);
  }
}

export default new Ejs();
