'use strict';

const pluginId = require('../admin/src/pluginId');

module.exports = async ({ strapi }) => {
  strapi.customFields.register({
    plugin: pluginId,
    name: 'single-product',
    type: 'json',
  });

  strapi.customFields.register({
    plugin: pluginId,
    name: 'multiple-products',
    type: 'json',
  });
};
