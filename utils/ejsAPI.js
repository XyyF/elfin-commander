const ejs = require('ejs');
const { loadFileFromElfinRoot, writeFlieFromScript } = require('./shell');

module.exports = class EjsAPI {
    constructor() {}

    /**
     * 根据模版渲染
     * @param {string} templatePath 形如 "templates\\wcn\\page.ejs"
     * @param {object} renderData  渲染数据
     * @param {object} renderData.__outName  输出的文件名
     */
    _renderByTempalte(templatePath, renderData) {
        // 读取模板内容
        const template = loadFileFromElfinRoot(templatePath);
        // 转化模板内容
        const transData = ejs.render(template, renderData);
        // 写内容到文件中
        return writeFlieFromScript(renderData.__outName, transData);
    }
}