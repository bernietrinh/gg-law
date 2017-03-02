let env = process.env.NODE_ENV || 'prod';
const config = require('../config/' + env);
config.env = env;
module.exports = config;
