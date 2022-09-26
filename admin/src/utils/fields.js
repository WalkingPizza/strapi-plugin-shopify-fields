import getTrad from './getTrad';

export const PRODUCT_FIELDS = [
  'body_html',
  'created_at',
  'handle',
  'id',
  'images',
  'image',
  'options',
  'product_type',
  'published_at',
  'published_scope',
  'status',
  'tags',
  'template_suffix',
  'title',
  'updated_at',
  'variants',
  'vendor',
];

export const fieldToSelectOption = (field) => ({
  key: field,
  value: field,
  disabled: ['id', 'images', 'title'].includes(field),
  metadatas: {
    intlLabel: {
      id: getTrad(`custom-fields.single-product.options.advanced.fields.${field}`),
      defaultMessage: field,
    },
  },
});
