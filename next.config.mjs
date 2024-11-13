/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
      
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**/**',
          },
        ],
      },
};
export default nextConfig;
