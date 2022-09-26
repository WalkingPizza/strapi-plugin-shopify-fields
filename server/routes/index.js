const productRoutes = require('./product');

module.exports = {
  admin: {
    type: 'admin',
    routes: [...productRoutes],
  },
};
