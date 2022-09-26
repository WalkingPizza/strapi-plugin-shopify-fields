const pluginId = require('../../admin/src/pluginId');
const { getProductsParamsSchema } = require('../utils/validation');

module.exports = {
  getProducts: async (ctx) => {
    const query = getProductsParamsSchema.validateSync(ctx.query);
    const products = await strapi.plugin(pluginId).service('shopify').getProducts(query);
    return products;
  },
  getProduct: async (ctx) => {
    ctx.send('hello');
  },
};
