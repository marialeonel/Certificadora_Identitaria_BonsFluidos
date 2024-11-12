const logger = require('./logger');

const handleResponse = (res, statusCode, logMessage, responseBody = null) => {
    if (statusCode >= 500) {
      logger.error(logMessage);
    } else if (statusCode >= 400 && statusCode < 500) {
      logger.warn(logMessage);
    } else {
      logger.info(logMessage);
    }
    res.status(statusCode).json(responseBody || { message: logMessage });
  };

  module.exports = {handleResponse};