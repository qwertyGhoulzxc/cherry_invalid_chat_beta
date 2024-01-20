/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs bufferutil",
    });
    return config;
  },
};

module.exports = nextConfig;
