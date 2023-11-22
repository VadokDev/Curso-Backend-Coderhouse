import winston from 'winston';
import dotenv from 'dotenv';
dotenv.config();

let logger;

if (process.env.environment === 'PRODUCTION') {
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'warn',
      }),
    ],
  });
} else {
  logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'info',
      }),
    ],
  });
}

export { logger };
