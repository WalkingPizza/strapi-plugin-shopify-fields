'use strict';

const Shopify = require('shopify-api-node');
const pluginId = require('../../admin/src/pluginId');
const transformResponse = require('../utils/transform');

module.exports = ({ strapi }) => {
  const client = new Shopify({
    shopName: strapi.plugin(pluginId).config('shopName'),
    accessToken: strapi.plugin(pluginId).config('accessToken'),
    apiVersion: strapi.plugin(pluginId).config('apiVersion'),
    autoLimit: true,
  });

  const getProducts = async (params) => {
    const products = await client.product.list(params);
    return transformResponse(products, params);
  };

  const getProduct = async (id) => {
    const product = await client.product.get(id);
    return transformResponse(product, params);
  };

  return { getProduct, getProducts };
};
