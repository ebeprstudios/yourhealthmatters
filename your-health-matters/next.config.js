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
      {
        // The Inner Courtroom shipped first under a standalone Root Work track.
        // It is now the Station 2 (Binary Collapse) deep-dive. Permanent (308)
        // so the original URL keeps resolving.
        source: '/root-work/the-inner-courtroom',
        destination: '/mind-as-medicine/inner-courtroom',
        permanent: true,
      },
      {
        // The Root Work landing is folded into the Stations architecture —
        // one organizing metaphor, not two. Send the old index to the wing.
        source: '/root-work',
        destination: '/mind-as-medicine',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
