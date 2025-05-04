#!/usr/bin/env node
import { program } from 'commander';
import { scanAssets } from '../src/scan.js';

program
  .name('asset-scan')
  .description('Scan and filter image assets in a project')
  .option('--path <dir>', 'Path to scan', '.')
  .option('--types <types>', 'Comma-separated extensions like png,jpg,svg')
  .option('--min-size <kb>', 'Minimum file size in KB')
  .option('--max-size <kb>', 'Maximum file size in KB')
  .option('--sort <key>', 'Sort by: size')
  .option('--save <file>', 'Write result to JSON file')
  .option('--stats', 'Show detailed statistics')
  .parse();

const options = program.opts();

scanAssets(options);
