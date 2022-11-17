const winston = require('winston');
const logsPath = process.env.LOGS_DIR;

module.exports = function () {
    let data = new Date;
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: `${logsPath}/uncaugtExceptions-${data.toISOString().substr(0, 10)}.log` }));

    process.on('unhandledRejection', (ex) => {
        throw ex;
    });

    winston.add(new winston.transports.File({ filename: `${logsPath}/animesconsulting-${data.toISOString().substr(0, 10)}.log` }));
}