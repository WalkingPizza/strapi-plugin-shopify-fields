import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.status.label'),
    defaultMessage: 'Published status',
  },
  description: {
    id: getTrad('custom-fields.options.status.description'),
    defaultMessage: 'The status of the products to retrieve',
  },
  name: 'options.status',
  type: 'multiselect',
  options: [
    {
      key: 'active',
      value: 'active',
      metadatas: {
        intlLabel: {
          id: getTrad(`custom-fields.single-product.options.advanced.status.active`),
          defaultMessage: 'Active',
        },
      },
    },
    {
      key: 'archived',
      value: 'archived',
      metadatas: {
        intlLabel: {
          id: getTrad(`custom-fields.single-product.options.advanced.status.archived`),
          defaultMessage: 'Archived',
        },
      },
    },
    {
      key: 'draft',
      value: 'draft',
      metadatas: {
        intlLabel: {
          id: getTrad(`custom-fields.single-product.options.advanced.status.draft`),
          defaultMessage: 'Draft',
        },
      },
    },
  ],
};
