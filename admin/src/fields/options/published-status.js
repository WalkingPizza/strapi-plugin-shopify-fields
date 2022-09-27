import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.published_status.label'),
    defaultMessage: 'Published status',
  },
  description: {
    id: getTrad('custom-fields.options.published_status.description'),
    defaultMessage: 'The status of the products to retrieve',
  },
  name: 'options.published_status',
  type: 'select',
  options: [
    {
      key: 'published',
      value: 'published',
      metadatas: {
        intlLabel: {
          id: getTrad(`custom-fields.single-product.options.advanced.published_status.published`),
          defaultMessage: 'Published',
        },
      },
    },
    {
      key: 'unpublished',
      value: 'unpublished',
      metadatas: {
        intlLabel: {
          id: getTrad(`custom-fields.single-product.options.advanced.published_status.unpublished`),
          defaultMessage: 'Unublished',
        },
      },
    },
    {
      key: 'any',
      value: 'any',
      metadatas: {
        intlLabel: {
          id: getTrad(`custom-fields.single-product.options.advanced.published_status.any`),
          defaultMessage: 'Any',
        },
      },
    },
  ],
};
