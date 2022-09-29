'use strict';

const _ = require('lodash');

module.exports = ({ strapi }) => {
  const amendSecurityMiddleware = () => {
    strapi.log.info(
      "[Shopify Fields] Amending the security middleware to add Shopify's CDN to the CSP allow-list"
    );

    let middlewares = strapi.config.get('middlewares', []);
    let securityMiddleware;
    let securityMiddlewareIndex;

    middlewares.forEach((middleware, index) => {
      if (_.isObject(middleware) && middleware.name === 'strapi::security') {
        securityMiddleware = middleware;
        securityMiddlewareIndex = index;
      } else if (typeof middleware === 'string' && middleware === 'strapi::security') {
        middlewares[index] = { name: 'strapi::security', config: {} };
        securityMiddleware = middleware;
        securityMiddlewareIndex = index;
      }
    });

    if (!securityMiddlewareIndex) return;

    const currentDirectives = _.get(
      securityMiddleware,
      'config.contentSecurityPolicy.directives.img-src',
      []
    );

    _.set(middlewares[securityMiddlewareIndex], 'config.contentSecurityPolicy.directives.img-src', [
      ...currentDirectives,
      'https://cdn.shopify.com',
    ]);

    strapi.config.middlewares = middlewares;
  };

  return { amendSecurityMiddleware };
};
