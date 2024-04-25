<<<<<<< HEAD
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  images: {
    domains: ['rdl.ink'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    config.module.rules.push({
      test: /\.md|\.mdx|\.webp$/,
      use: 'raw-loader',
    });

    return config;
  },
};
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export'
}

module.exports = nextConfig
>>>>>>> 4b7fdea (first commit)
