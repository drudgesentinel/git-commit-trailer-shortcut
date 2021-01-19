#!/usr/bin/env node
const commander = require('commander');
const program = new commander.Command();

program
  .option('-p, --partner', 'add partner for commit trailer');