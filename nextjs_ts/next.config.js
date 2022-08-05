/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/sample/:path*',
        destination: '/sampleItem',
      },
    ];
  },
};

module.exports = nextConfig;
