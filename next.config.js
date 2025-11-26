/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Fix for webpack chunk resolution issues in dev mode
    if (dev) {
      // Use named module IDs for better chunk resolution in dev
      config.optimization = {
        ...config.optimization,
        moduleIds: 'named',
        chunkIds: 'named',
      }
    }
    return config
  },
}

module.exports = nextConfig

