#!/usr/bin/env node

var program = require('commander')

program
    .version(require('../package.json').version)
    .usage('<command> [options]')

program
    .command('depend <depend name>')
    .description('初始化依赖工程')
    .on('--help', () => {
        console.log('')
        console.log('Usage: elfingit depend')
        console.log('Options:')
        console.log('  init')
        console.log('  install')
    })

program.parse(process.argv)