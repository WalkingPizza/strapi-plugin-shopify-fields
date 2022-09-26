import ShopifyIcon from '../components/ShopifyIcon';
import pluginId from '../pluginId';
import { fieldToSelectOption, PRODUCT_FIELDS } from '../utils/fields';
import getTrad from '../utils/getTrad';
import * as yup from 'yup';

export default {
  name: 'multiple-products',
  pluginId,
  type: 'json',
  icon: ShopifyIcon,
  components: {
    Input: async () => import('../components/Input/MultipleProductInput'),
  },
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.label'),
    defaultMessage: 'Shopify – Multiple Products',
  },
  intlDescription: {
    id: getTrad('custom-fields.multiple-products.description'),
    defaultMessage: 'Select multiple products from Shopify',
  },
  options: {
    base: [
      {
        intlLabel: {
          id: getTrad('custom-fields.multiple-products.options.base.api-version.label'),
          defaultMessage: 'API Version',
        },
        description: {
          id: getTrad('custom-fields.multiple-products.options.base.api-version.description'),
          defaultMessage: 'The Shopify API version used to fetch the products',
        },
        name: 'options.apiVersion',
        type: 'string',
        placeholder: {
          id: getTrad('custom-fields.single-product.options.base.api-version.placeholder'),
          defaultMessage: '2022-07',
        },
        disabled: true,
      },
    ],
    advanced: [
      {
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
        defaultValue: PRODUCT_FIELDS,
        options: PRODUCT_FIELDS.map(fieldToSelectOption),
      },
      {
        intlLabel: {
          id: getTrad('custom-fields.multiple-products.options.advanced.collection_id.label'),
          defaultMessage: 'Collection ID',
        },
        description: {
          id: getTrad('custom-fields.multiple-products.options.advanced.collection_id.description'),
          defaultMessage: 'The ID of the collection to pull products from',
        },
        name: 'options.collection_id',
        type: 'text',
      },
      {
        intlLabel: {
          id: getTrad('custom-fields.multiple-products.options.advanced.created_at_max.label'),
          defaultMessage: 'Created before',
        },
        description: {
          id: getTrad(
            'custom-fields.multiple-products.options.advanced.created_at_max.description'
          ),
          defaultMessage: 'The date and time before which products were created',
        },
        name: 'options.created_at_max',
        type: 'datetime',
      },
      {
        intlLabel: {
          id: getTrad('custom-fields.multiple-products.options.advanced.created_at_min.label'),
          defaultMessage: 'Created after',
        },
        description: {
          id: getTrad(
            'custom-fields.multiple-products.options.advanced.created_at_min.description'
          ),
          defaultMessage: 'The date and time after which products were created',
        },
        name: 'options.created_at_min',
        type: 'datetime',
      },
      {
        intlLabel: {
          id: getTrad('custom-fields.multiple-products.options.advanced.published_at_max.label'),
          defaultMessage: 'Published before',
        },
        description: {
          id: getTrad(
            'custom-fields.multiple-products.options.advanced.published_at_max.description'
          ),
          defaultMessage: 'The date and time before which products were published',
        },
        name: 'options.published_at_max',
        type: 'datetime',
      },
      {
        intlLabel: {
          id: getTrad('custom-fields.multiple-products.options.advanced.published_at_min.label'),
          defaultMessage: 'Published after',
        },
        description: {
          id: getTrad(
            'custom-fields.multiple-products.options.advanced.published_at_min.description'
          ),
          defaultMessage: 'The date and time after which products were published',
        },
        name: 'options.published_at_min',
        type: 'datetime',
      },
      {
        intlLabel: {
          id: getTrad(
            'custom-fields.multiple-products.options.advanced.presentment_currencies.label'
          ),
          defaultMessage: 'Presentment Currencies',
        },
        description: {
          id: getTrad(
            'custom-fields.multiple-products.options.advanced.presentment_currencies.description'
          ),
          defaultMessage:
            "The currencies you'd like the prices to be in as comma-separated ISO 4217 codes",
        },
        name: 'options.presentment_currencies',
        type: 'text',
      },
    ],
    validator: () => ({
      amount: yup
        .number()
        .required({
          id: getTrad('custom-fields.multiple-products.options.base.amount.required'),
          defaultMessage: 'You must provide an amount',
        })
        .min(1, {
          id: 'custom-fields.multiple-products.options.validator.min',
          defaultMessage: 'You must fetch at least 1 product',
        })
        .max(250, {
          id: 'custom-fields.multiple-products.options.validator.max',
          defaultMessage: 'You can fetch 250 product at most',
        }),
      apiVersion: yup.string().default('2022-07').required(),
      fields: yup
        .array()
        .of(yup.string())
        .required({
          id: 'custom-fields.multiple-products.options.validator.fields',
          defaultMessage: 'You must select at least 1 field',
        })
        .min(1, {
          id: 'custom-fields.multiple-products.options.validator.fields',
          defaultMessage: 'You must select at least 1 field',
        }),
    }),
  },
};
