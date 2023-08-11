const withAntd = require("next-plugin-antd-less");
const withPlugins = require("next-compose-plugins");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = withPlugins([withAntd], nextConfig);
