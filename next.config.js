const withAntd = require("next-plugin-antd-less");
const withPlugins = require("next-compose-plugins");
// const withTM = require("next-transpile-modules")(["tl-dashboards"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
};

module.exports = withPlugins([withAntd], nextConfig);
