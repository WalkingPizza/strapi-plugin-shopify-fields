import ShopifyIcon from '../components/ShopifyIcon';
import pluginId from '../pluginId';
import { fieldToSelectOption, PRODUCT_FIELDS } from '../utils/fields';
import getTrad from '../utils/getTrad';
import * as yup from 'yup';

export default {
  name: 'single-product',
  pluginId,
  type: 'json',
  icon: ShopifyIcon,
  components: {
    Input: async () => import('../components/Input/SingleProductInput'),
  },
  intlLabel: {
    id: getTrad('custom-fields.single-product.label'),
    defaultMessage: 'Shopify – Single Product',
  },
  intlDescription: {
    id: getTrad('custom-fields.single-product.description'),
    defaultMessage: 'Select a product from Shopify',
  },
  options: {
    base: [
      {
        intlLabel: {
          id: getTrad('custom-fields.single-product.options.base.api-version.label'),
          defaultMessage: 'API Version',
        },
        description: {
          id: getTrad('custom-fields.single-product.options.base.api-version.description'),
          defaultMessage: 'The Shopify API version used to fetch the product',
        },
        name: 'options.apiVersion',
        type: 'string',
        disabled: true,
        placeholder: {
          id: getTrad('custom-fields.single-product.options.base.api-version.placeholder'),
          defaultMessage: '2022-07',
        },
      },
    ],
    advanced: [
      {
        intlLabel: {
          id: getTrad('custom-fields.single-product.options.advanced.fields'),
          defaultMessage: 'Fields',
        },
        description: {
          id: getTrad('custom-fields.single-product.options.advanced.fields.description'),
          defaultMessage: 'Select the fields to display',
        },
        hint: {
          id: getTrad('custom-fields.content-type-builder.multiselect.hint'),
          defaultMessage: "Select the fields to retrieve from Shopify's APIs",
        },
        name: 'options.fields',
        type: 'multiselect',
        defaultValue: PRODUCT_FIELDS,
        options: PRODUCT_FIELDS.map(fieldToSelectOption),
      },
    ],
    validator: () => ({
      apiVersion: yup.string().default('2022-07').required(),
      fields: yup
        .array()
        .of(yup.string())
        .required({
          id: 'custom-fields.single-product.options.validator.fields',
          defaultMessage: 'You must select at least 1 field',
        })
        .min(1, {
          id: 'custom-fields.single-product.options.validator.fields',
          defaultMessage: 'You must select at least 1 field',
        }),
    }),
  },
};
