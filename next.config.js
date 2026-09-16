const { generateIndex, ProjectSearchIndexPlugin } = require('./scripts/project-search-index.cjs');
generateIndex();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new ProjectSearchIndexPlugin());
    return config;
  },
}

module.exports = nextConfig
