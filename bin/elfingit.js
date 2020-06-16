#!/usr/bin/env node

var program = require('commander')

program
    .version(require('../package.json').version)
    .usage('<command> [options]')
    .parse(process.argv);

program
    .command('depend <depend name>')
    .description('初始化依赖工程')