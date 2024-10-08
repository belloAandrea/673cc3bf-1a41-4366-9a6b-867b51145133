const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['styled-components']);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
});