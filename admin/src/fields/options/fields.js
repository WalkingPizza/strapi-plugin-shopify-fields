import { fieldToSelectOption, PRODUCT_FIELDS } from '../../utils/fields';
import getTrad from '../../utils/getTrad';

export default {
  intlLabel: {
    id: getTrad('custom-fields.options.fields.label'),
    defaultMessage: 'Fields',
  },
  description: {
    id: getTrad('custom-fields.options.fields.description'),
    defaultMessage: 'Select the fields to display (ID is automatically included)',
  },
  name: 'options.fields',
  type: 'multiselect',
  options: PRODUCT_FIELDS.map(fieldToSelectOption),
};
