import ShopifyIcon from '../components/ShopifyIcon';
import pluginId from '../pluginId';
import getTrad from '../utils/getTrad';
import * as yup from 'yup';
import options from './options';

export default {
  name: 'multiple-products',
  pluginId,
  type: 'json',
  icon: ShopifyIcon,
  components: {
    Input: async () => import('../components/Input/Multiple'),
  },
  intlLabel: {
    id: getTrad('custom-fields.multiple-products.label'),
    defaultMessage: 'Shopify – Multiple Products',
  },
  intlDescription: {
    id: getTrad('custom-fields.multiple-products.description'),
    defaultMessage: 'Select multiple products from Shopify',
  },
  multiple: true,
  options: {
    advanced: [
      {
        sectionTitle: {
          id: getTrad('custom-fields.multiple-products.response-settings'),
          defaultMessage: 'Response settings',
        },
        items: [options.fields, options.presentmentCurrencies],
      },
      {
        sectionTitle: {
          id: getTrad('custom-fields.multiple-products.filter-by-product-details'),
          defaultMessage: 'Filter by product details',
        },
        items: [
          options.collectionId,
          options.publishedStatus,
          options.vendor,
          options.status,
          options.productType,
          options.sinceId,
          options.presentmentCurrencies,
        ],
      },
      {
        sectionTitle: {
          id: getTrad('custom-fields.multiple-products.filter-by-dates'),
          defaultMessage: 'Filter by dates',
        },
        items: [
          options.createdAtMax,
          options.createdAtMin,
          options.publishedAtMax,
          options.publishedAtMin,
          options.updatedAtMax,
          options.updatedAtMin,
        ],
      },
    ],
    validator: () => ({
      fields: yup.array().of(yup.string()).default([]),
    }),
  },
};
