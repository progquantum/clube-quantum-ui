module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./src/scripts/sitemap-generator')
    }

    return config
  }
}
