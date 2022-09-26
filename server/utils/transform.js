const _ = require('lodash');

const transformResponse = (data) => {
  return {
    data,
    meta: {
      pagination: {
        nextPage: _.get(data, 'nextPageParameters', null),
        previousPage: _.get(data, 'previousPageParameters', null),
      },
    },
  };
};

module.exports = transformResponse;
