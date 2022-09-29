# Strapi's Shopify Fields Plugin

Use your Shopify products in Strapi!

## 🖌️ Available custom fields

The Shopify Fields plugin currently implements the following custom fields:

- Single Product
- Multiple Products

## ✨ Supported Strapi Versions

The Shopify Fields plugin is only compatible with Strapi v4.

## ⚙️ Installation

```bash
# if you use NPM
npm install strapi-plugin-shopify-fields

# if you use Yarn
yarn add strapi-plugin-shopify-fields
```

## 🔧 Configuration

### Creating a private app on Shopify

To use the Shopify Fields plugin, you must create a private app on Shopify and obtain an access token.
To do so, you should:

1. Open your Shopify store's admin dashboard
2. Click on _Apps_
3. Click on _Apps and sales channel settings_
4. Click on _Develop apps for your store_
5. Click on _Create an app_
6. Insert a name for the app in the _App name_ field, eg. Strapi
7. Click on _Create app_
8. Click on _Configure Admin API scopes_
9. Check `read_products` under the _Products_ category
10. Click on _Save_
11. Go to the _API credentials_ tab
12. Click on _Install app_
13. Copy your access token and store it in your `.env` file

### Configuring the plugin

Open or create the file `config/plugins.js` and enable the plugin by adding the following snippet:

```js
module.exports = {
  // ...
  'shopify-fields': {
    enabled: true,
    config: {
      apiVersion: '2022-07', // Or one of Shopify's supported API versions
      accessToken: process.env.SHOPIFY_ACCESS_TOKEN, // The environment variable containing your private app's access token
      shopName: process.env.SHOP_NAME, // The environment variable containing your myshopify.com domain
    },
  },
};
```

### Configuring the security middleware

Open the file `config/middlewares.js` and check the configuration of the `strapi::security` middleware.

If your file looks like this:

```js
module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
```

Replace `'strapi::security'` with:

```js
{
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: {
      directives: {
        'img-src': ["'self'", 'data:', 'blob:', 'https://dl.airtable.com', 'https://cdn.shopify.com'],
      },
    },
  },
}
```

If, instead, your file already presents `strapi::security` as an object, simply add `https://cdn.shopify.com` to the `img-src` array.

## 🚀 Roadmap

- [ ] Automatic sync between your Shopify catalog and Strapi fields
- [ ] Improved UI
- [ ] Support for collections and metafields
