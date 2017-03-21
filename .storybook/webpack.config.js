// Dirty, dirty hack...

var config = require('../node_modules/custom-react-scripts/config/webpack.config.dev.js');

config.module.loaders.map(function (loader) {
  if (loader.test && 
      typeof loader.test.test === 'function' && 
      loader.test.test('.css')) {
    return {
      test: /\.css$/,
      loader: 'style!css?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    };
  } else {
    return loader;
  }
});

module.exports = config;