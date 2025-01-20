import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
