'use strict';

const register = require('./register');
const services = require('./services');
const routes = require('./routes');
const controllers = require('./controllers');
const middlewares = require('./middlewares');
const config = require('./config');

module.exports = {
  register,
  config,
  services,
  controllers,
  routes,
  middlewares,
};
