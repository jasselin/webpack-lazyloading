const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

var entries = {
  'main': './src/index.js'
};

for(var i = 1; i < 10; i++) {
  entries['module3-' + i] = './src/module3.js';
}

module.exports = {
  mode: 'development',
  entry: entries,
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ["index.html", "vendor.js", "manifest.json"]
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./build/manifest.json')
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  }
};