/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@anthropic-ai/sdk'],
  },
  async redirects() {
    return [
      {
        // Legacy devotional route moved to Station 6 of the Mind as Medicine
        // loop. Permanent redirect — devotional guides are mind-doorway.
        source: '/devotional',
        destination: '/mind-as-medicine#station-6',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
