const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

var entries = {
  'main': './src/index.js'
};

for(var i = 1; i <= 3; i++) {
  entries['module3-' + i] = './src/module3.js';
}

var createConfig = function(configEntries) {
  return {
    mode: 'development',
    entry: configEntries,
    output: {
      chunkFilename: '[name].js',
      filename: '[name].js',
      path: path.join(__dirname, 'dist')
    },
    plugins: [
      // new CleanWebpackPlugin(['dist'], {
      //   exclude: ["index.html", "vendor.js", "manifest.json"]
      // }),
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./build/manifest.json')
      })
    ],
    optimization: {
      runtimeChunk: 'single'
    }
  };
}

module.exports = (env) => {
  var configs = [];
  if (env && env.loader1)
    configs.push(createConfig({'loader1': './src/loader1.js'}))
  else if (env && env.loader2)
    configs.push(createConfig({'loader2': './src/loader2.js'}))
  else
    configs.push(createConfig(entries));

    return configs;
};