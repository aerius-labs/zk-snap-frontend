/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Add the headers function to set the required headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          }
        ]
      }
    ]
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Push the worker-loader configuration
      config.module.rules.push({
        test: /\.worker\.js$/,
        loader: 'worker-loader',
        options: {
          inline: 'fallback',
          publicPath: '/_next/static/workers/', // This is from your previous config
        },
      });
    }

    return config;
  },
}

module.exports = nextConfig;
