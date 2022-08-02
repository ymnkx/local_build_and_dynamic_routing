/** @type {import('next').NextConfig} */
const nextConfig = {
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
