import { fieldToSelectOption, PRODUCT_FIELDS } from '../../utils/fields';
import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.options.advanced.fields.label'),
    defaultMessage: 'Fields',
  },
  description: {
    id: getTrad('custom-fields.multiple-products.options.advanced.fields.description'),
    defaultMessage: 'Select the fields to display',
  },
  hint: {
    id: getTrad('custom-fields.content-type-builder.multiselect.hint'),
    defaultMessage: "Select the fields to retrieve from Shopify's APIs",
  },
  name: 'options.fields',
  type: 'multiselect',
  options: PRODUCT_FIELDS.map(fieldToSelectOption),
};
