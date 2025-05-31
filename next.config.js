const nextConfig = {
  swcMinify: false, // disable SWC minification
  experimental: {
    swcPlugins: [], // ensure no SWC plugins interfere
  },
};

module.exports = nextConfig;
