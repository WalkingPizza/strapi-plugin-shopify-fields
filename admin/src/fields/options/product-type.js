import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.product_type.label'),
    defaultMessage: 'Product Type',
  },
  description: {
    id: getTrad('custom-fields.options.product_type.description'),
    defaultMessage: 'The product type to filter products by',
  },
  name: 'options.product_type',
  type: 'text',
};
