/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['*.s3.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3333',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum-assets.s3.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum.s3.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum.s3.us-east-2.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
