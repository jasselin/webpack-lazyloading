const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    'main': './src/index.js', 
    'module3': './src/module3.js'
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { exclude: "index.html" })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendor: {
            test: /node_modules/,
            name: "vendor",
            chunks: "initial",
            minSize: 1,
            priority: 10
        }
      }
    }
  }
};