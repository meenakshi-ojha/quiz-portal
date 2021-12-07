const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const packages = [];
packages.push(path.join(__dirname, "../app-login"));
packages.push(path.join(__dirname, "../app-home"));
packages.push(path.join(__dirname, "../app-components"));
packages.push(path.join(__dirname, "../page-quiz"));
module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];
        match.loader.include = include.concat(packages);
      }
      return webpackConfig;
    },
  },
};
