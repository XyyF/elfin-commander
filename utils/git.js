/**
 * Created by rengar on 2020/6/17.
 */
module.exports = {
    getRepoFromSource,
};

/**
 * 从 ssh 或者 https 中提取出仓库名
 * @param source ssh 或者 https形式的仓库地址
 */
function getRepoFromSource(source) {
    const repo = /(?<=\/)[^/]+(?=\.git)/.exec(source);
    if (!repo) {
        throw new Error(`Error: 无效的仓库地址 ${source}`);
    }
    return repo;
}
