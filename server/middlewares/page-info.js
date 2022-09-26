'use strict';

const _ = require('lodash');

module.exports = () => {
  return async (ctx, next) => {
    if (ctx.query?.page_info) ctx.query = _.pick(ctx.query, ['page_info', 'limit', 'fields']);
    await next();
  };
};
