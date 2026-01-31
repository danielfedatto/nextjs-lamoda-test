import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lojalancaperfume.vtexassets.com',
      },
    ],
  },
};

export default nextConfig;
