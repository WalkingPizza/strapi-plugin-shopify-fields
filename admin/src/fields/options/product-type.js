import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.options.advanced.product_type.label'),
    defaultMessage: 'Product Type',
  },
  description: {
    id: getTrad('custom-fields.multiple-products.options.advanced.product_type.description'),
    defaultMessage: 'The product type to filter products by',
  },
  name: 'options.product_type',
  type: 'text',
};
