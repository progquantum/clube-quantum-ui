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
        hostname: 'clubequantum.*.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum.*.*.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum-assets.*.amazonaws.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'clubequantum-assets.*.*.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
