//코드 가독성을 높히기 위한 방법
const { createLogger, transports, format } = require("winston")
const { combine, timestamp, label, printf, simple, colorize } = format;
require("dotenv").config();

const printLogFormat = {
  file: combine(
    label({
      label: "Backend"
    }),
    // colorize(),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd"
    }),
    printf(({ timestamp, label, level, message }) => {
      return `${timestamp} :${label} : ${level} : ${message}`;
    })
  ),
  console: combine(
    label({
      label: "Backend"
    }),
    colorize(),
    printf(({ timestamp, label, level, message }) => {
      return `${timestamp} :${label} : ${level} : ${message}`;
    })
  )
};

const opts = {
  file:
    new transports.File({
      filename: "access.log",
      dirname: "./log",
      level: "info",
      format: printLogFormat.file
    }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console
  })
}

const logger = createLogger({
  transports: [
    opts.file
  ],
});
if (process.env.NODE_ENV !== "production") {
  logger.add(
    opts.console
  )
}

logger.stream = {
  write : (message) => logger.info(message)
}



module.exports = logger