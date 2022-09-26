import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.options.advanced.collection_id.label'),
    defaultMessage: 'Collection ID',
  },
  description: {
    id: getTrad('custom-fields.multiple-products.options.advanced.collection_id.description'),
    defaultMessage: 'The ID of the collection to pull products from',
  },
  name: 'options.collection_id',
  type: 'text',
};
