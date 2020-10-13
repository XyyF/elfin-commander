#!/usr/bin/env node

var program = require('commander')
var version = require('../package.json').version

// var initCommand = require('../src/external/init')
// var installCommand = require('../src/external/install')

program
    .version(version)
    .usage('<command> [options]')

/**
 * multirepo 工程联合方法
 * elfincmd external init
 * elfincmd external checkout
 */
program
    .command('external <command-name>')
    .description('external multirepo工程初始化方法')
    .action((command) => {
        require('../src/external')(command);
    })
    .on('--help', function () {
        console.log('');
        console.log('command-name:');
        console.log(' $ init     初始化.elfin.external.js文件');
        console.log(' $ clone    根据配置文件克隆相应的工程');
        console.log(' $ install  根据配置文件下载相应的依赖');
        console.log('');
    });

program
    .command('hooks <hookName> [options]')
    .description('depend repository run npm install')
    .action((hookName, options) => {
        console.log('clone command called', hookName, options)
    })
    .on('--help', function() {
        console.log('');
        console.log('hook-name:');
        console.log('  post-checkout');
        console.log('  pre-push');
        console.log('  post-merge');
        console.log('  reset-branch');
        console.log('');
    });

program.parse(process.argv)

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs(cmd) {
    const args = {}
    cmd.options.forEach(o => {
        const key = o.long.replace(/^--/, '')
        // if an option is not present and Command has a method with the same name
        // it should not be copied
        if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
            args[key] = cmd[key]
        }
    })
    return args
}  