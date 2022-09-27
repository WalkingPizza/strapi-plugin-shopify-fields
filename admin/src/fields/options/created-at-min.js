import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.created_at_min.label'),
    defaultMessage: 'Created after',
  },
  description: {
    id: getTrad('custom-fields.options.created_at_min.description'),
    defaultMessage: 'The date and time after which products were created',
  },
  name: 'options.created_at_min',
  type: 'datetime',
};
