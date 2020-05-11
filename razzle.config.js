const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    config.resolve.alias = {
      ...(config.resolve.alias),
      
      // comment these two lines to run in react
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    }

    return config;
  }
}