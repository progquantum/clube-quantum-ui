/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3333',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum-assets.s3.amazonaws.com',
        pathname: '/establishments/**',
      },
    ],
  },
};

module.exports = nextConfig;
