const getURL = () => {
  const { url, host, port } = strapi.config.server;
  return url || `${host}:${port}`;
};

module.exports = getURL;
