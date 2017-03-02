let env = process.env.NODE_ENV || 'production';
const config = require('../config/' + env);
config.env = env;
module.exports = config;
