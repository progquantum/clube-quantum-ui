module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // eslint-disable-next-line global-require
      require('./src/scripts/sitemap-generator');
    }

    return config;
  },
};
