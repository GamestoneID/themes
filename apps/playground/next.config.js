/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@gamestone/themes'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sink',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
