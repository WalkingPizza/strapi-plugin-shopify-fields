import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.created_at_max.label'),
    defaultMessage: 'Created before',
  },
  description: {
    id: getTrad('custom-fields.options.created_at_max.description'),
    defaultMessage: 'The date and time before which products were created',
  },
  name: 'options.created_at_max',
  type: 'datetime',
};
