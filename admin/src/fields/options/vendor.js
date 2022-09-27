import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.vendor.label'),
    defaultMessage: 'Collection ID',
  },
  description: {
    id: getTrad('custom-fields.options.vendor.description'),
    defaultMessage: 'The vendor of the products to retrieve',
  },
  name: 'options.vendor',
  type: 'text',
};
