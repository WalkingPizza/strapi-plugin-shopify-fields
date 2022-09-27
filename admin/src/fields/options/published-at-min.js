import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.published_at_min.label'),
    defaultMessage: 'Published after',
  },
  description: {
    id: getTrad('custom-fields.options.published_at_min.description'),
    defaultMessage: 'The date and time after which products were published',
  },
  name: 'options.published_at_min',
  type: 'datetime',
};
