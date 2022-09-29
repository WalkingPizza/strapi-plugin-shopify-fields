import ShopifyIcon from '../components/ShopifyIcon';
import pluginId from '../pluginId';
import getTrad from '../utils/getTrad';
import * as yup from 'yup';
import options from '../fields/options';

export default {
  name: 'single-product',
  pluginId,
  type: 'json',
  icon: ShopifyIcon,
  multiple: true,
  components: {
    Input: async () => import('../components/Input/Single'),
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
