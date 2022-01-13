#!/usr/bin/env node

const program = require('commander');
const version = require('../package.json').version;
const inquirer = require('inquirer');

// elfincmd pc canledar 使用
inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'));

program
  .version(version)
  .usage('<command> [options]');

/**
 * multirepo 工程联合方法
 * elfincmd external init
 * elfincmd external checkout
 */
program
  .command('external <command-name>')
  .description('external multirepo工程初始化方法')
  .option('--multi', 'multirepo[default]')
  .option('--mono', 'monorepo')
  .action((command, options) => {
    require('../lib/src/external').default(command, options);
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
  .command('hooks [hookName]')
  .description('git hooks')
  .action((hookName, cmd) => {
    const options = cleanArgs(cmd);
    require('../lib/src/hooks').default(hookName, options);
  })
  .on('--help', function () {
    console.log('');
    console.log('hook-name:');
    console.log(' $                 (为空)创建husky配置');
    console.log(' $ commit-msg      before提交commit注释');
    console.log(' $ post-checkout   before切换分支,同步依赖工程分支');
    console.log('');
  });

program
  .command('eslint')
  .description('项目eslint配置生成')
  .action((eslintName, cmd) => {
    const options = cleanArgs(cmd);
    require('../lib/src/hooks').default(eslintName, options);
  })
  .on('--help', function () {
    console.log('');
    console.log('eslint-name:');
    console.log(' $                 (为空)创建eslint配置');
    console.log('');
  });

program.command('pc')
  .description('Personalized customization个性化定制脚本命令')
  .action(() => {
    require('../src/personalized-customization')();
  })
  .on('--help', function () {
    console.log('');
  });

program
  .command('docs')
  .description('docs 文档提示命令')
  .action(() => {
    require('../lib/src/docs')();
  })
  .on('--help', function () {
    console.log('');
    console.log('doc-name:');
    console.log('');
  });

program.parse(process.argv);

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs(cmd) {
  const args = {};
  cmd.options.forEach((o) => {
    const key = o.long.replace(/^--/, '');
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key];
    }
  });
  return args;
}
