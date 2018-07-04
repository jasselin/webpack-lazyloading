const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    'main': './src/index.js',
    'module3': './src/module3.js'
  },
  output: {
    chunkFilename: '[name]-chunk.js',
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