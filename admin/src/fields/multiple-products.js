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
    base: [options.fields],
    advanced: [
      options.collectionId,
      options.createdAtMax,
      options.createdAtMin,
      options.publishedAtMax,
      options.publishedAtMin,
      options.publishedStatus,
      options.updatedAtMax,
      options.updatedAtMin,
      options.vendor,
      options.status,
      options.productType,
      options.sinceId,
      options.presentmentCurrencies,
    ],
    validator: () => ({
      fields: yup.array().of(yup.string()).default([]),
    }),
  },
};
