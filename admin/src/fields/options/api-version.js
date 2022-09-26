import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.options.base.api-version.label'),
    defaultMessage: 'API Version',
  },
  description: {
    id: getTrad('custom-fields.multiple-products.options.base.api-version.description'),
    defaultMessage: 'The Shopify API version used to fetch the products',
  },
  name: 'options.apiVersion',
  type: 'string',
  placeholder: {
    id: getTrad('custom-fields.single-product.options.base.api-version.placeholder'),
    defaultMessage: '2022-07',
  },
  disabled: true,
};
