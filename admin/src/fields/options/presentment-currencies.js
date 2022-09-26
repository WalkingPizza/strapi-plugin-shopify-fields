import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.options.advanced.presentment_currencies.label'),
    defaultMessage: 'Presentment currencies',
  },
  description: {
    id: getTrad(
      'custom-fields.multiple-products.options.advanced.presentment_currencies.description'
    ),
    defaultMessage:
      "The currencies you'd like the prices to be in as comma-separated ISO 4217 codes",
  },
  name: 'options.presentment_currencies',
  type: 'text',
};
