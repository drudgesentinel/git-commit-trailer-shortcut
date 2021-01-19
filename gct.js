#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();
const config = require('./config');

program
  .option('-m, --message', 'add commit message for the commit trailer');

program.parse(process.argv);

var config = {};