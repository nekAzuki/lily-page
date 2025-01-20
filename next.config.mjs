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
};

export default nextConfig;
