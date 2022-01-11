const logger = (req, res, next) => {
  console.log('request made');
  next();
};

module.exports = logger;
