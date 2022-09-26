'use strict';

const register = require('./register');
const services = require('./services');
const routes = require('./routes');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

module.exports = {
  register,
  services,
  controllers,
  routes,
  middlewares,
};
