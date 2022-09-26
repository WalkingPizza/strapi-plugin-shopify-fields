'use strict';

const pluginId = require('../../admin/src/pluginId');

module.exports = [
  {
    method: 'GET',
    path: '/products',
    handler: 'product.getProducts',
    config: {
      middlewares: [`plugin::${pluginId}.pageInfo`],
    },
  },
  {
    method: 'GET',
    path: '/products/:id',
    handler: 'product.getProduct',
  },
];
