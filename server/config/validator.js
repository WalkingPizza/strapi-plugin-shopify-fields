'use strict';

const yup = require('yup');

module.exports = yup.object().shape({
  apiVersion: yup.string().default('2022-07').required(),
  accessToken: yup.string().required(),
  shopName: yup.string().required(),
});
