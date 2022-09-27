import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.published_at_max.label'),
    defaultMessage: 'Published before',
  },
  description: {
    id: getTrad('custom-fields.options.published_at_max.description'),
    defaultMessage: 'The date and time before which products were published',
  },
  name: 'options.published_at_max',
  type: 'datetime',
};
