module.exports = {
    warning,
    error,
}

// 字色编号：30黑，31红，32绿，33黄，34蓝，35紫，36深绿，37白色
// 背景编号：40黑，41红，42绿，43黄，44蓝，45紫，46深绿，47白色
// \033[背景色编号;字色编号m  ~~  \033[0m

function warning(str) {
    console.log('\033[43;30m WARNING \033[0m' + str);
};

function error(str) {
    console.log('\033[41;30m ERROR \033[0m' + str);
}