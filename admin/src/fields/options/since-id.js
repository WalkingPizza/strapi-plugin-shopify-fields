import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.options.advanced.since_id.label'),
    defaultMessage: 'Since ID',
  },
  description: {
    id: getTrad('custom-fields.multiple-products.options.advanced.since_id.description'),
    defaultMessage: 'The ID after which to retrieve products',
  },
  name: 'options.since_id',
  type: 'text',
};
