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
    filename: '[name]-bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ["index.html", "vendor-bundle.js", "manifest.json"]
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./build/manifest.json')
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      }
    }
  }
};