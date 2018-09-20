import winston from 'winston';
import fs from 'fs';

const logDir = './src/logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      handleExceptions: true,
      format: winston.format.combine(winston.format.colorize(), winston.format.simple())
    }),
    new winston.transports.File({
      level: 'info',
      filename: `${logDir}/log-file.log`,
      handleExceptions: true,
      format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.json()
      ),
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false
    })
  ],
  exitOnError: false
});

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  }
};

export default logger;
