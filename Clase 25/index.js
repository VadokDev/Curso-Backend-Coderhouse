import dotenv from 'dotenv';
import { Command } from 'commander';
import express from 'express';

const program = new Command();

program.option('--mode <mode>', 'Modo de ejecución', 'production');
program.parse();

const mode = program.opts().mode;

const config = {
  development: {
    envFile: '.env.development',
  },
  production: {
    envFile: '.env',
  },
};

dotenv.config({ path: config[mode].envFile });

const app = express();
app.listen(process.env.APP_PORT, () =>
  console.log('tuki en puerto', process.env.APP_PORT)
);

console.log(process.env.MAIL_USERNAME);
console.log(process.env.MAIL_PASSWORD);
console.log(process.env.MAIL_APIKEY);
console.log(process.env.MAIL_PORT);
