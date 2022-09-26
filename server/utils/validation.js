const yup = require('yup');

const transformParams = (params) => {
  const commaSeparatedArrayFields = ['fields', 'handle', 'ids', 'presentmentCurrencies', 'status'];

  commaSeparatedArrayFields.forEach((field) => {
    if (Array.isArray(params[field])) params[field] = params[field].join(',');
  });

  return params;
};

const arrayOrString = yup.mixed().when('isArray', {
  is: Array.isArray,
  then: yup.array().of(yup.string()),
  otherwise: yup.string(),
});

const getProductsParamsSchema = yup
  .object()
  .shape({
    collection_id: yup.string(),
    created_at_max: yup.date(),
    created_at_min: yup.date(),
    fields: arrayOrString,
    handle: yup.string(),
    ids: yup.array().of(yup.string()),
    limit: yup.number().default(50).min(1).max(250),
    presentment_currencies: arrayOrString,
    product_type: yup.string(),
    published_at_max: yup.date(),
    published_at_min: yup.date(),
    published_status: yup.mixed().oneOf(['published', 'unpublished', 'any']),
    since_id: yup.string(),
    status: arrayOrString,
    title: yup.string(),
    updated_at_max: yup.date(),
    updated_at_min: yup.date(),
    vendor: yup.string(),
    page_info: yup.string(),
  })
  .noUnknown();

module.exports = { transformParams, getProductsParamsSchema };
