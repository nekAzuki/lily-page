
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i0.hdslb.com',
            port: '',
            pathname: '/bfs/face/**',
          },
        ],
      },
}

module.exports = withNextIntl(nextConfig)
