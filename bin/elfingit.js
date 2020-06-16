#!/usr/bin/env node

var program = require('commander')

program
    .version(require('../package.json').version)
    .usage('<command> [options]')

program
    .command('clone <source>')
    .description('clone a repository into a newly created directory')
    .action((source, destination) => {
            console.log('clone command called', source, destination)
    })

program
    .command('init')
    .description('init depend repository')
    .action(() => {
            console.log('clone command called')
    })

program
    .command('install [name]')
    .description('depend repository run npm install')
    .action((name) => {
            console.log('clone command called', name)
    })

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