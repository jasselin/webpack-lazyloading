const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  // devtool: 'inline-source-map',
  entry: {
    'main': path.resolve(__dirname, 'src/index.js'),
    'module1': path.resolve(__dirname, 'src/module1.js'),
    'module2': path.resolve(__dirname, 'src/module2.js'),
    'module3': path.resolve(__dirname, 'src/module3.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'out'),
    filename: '[name].js',
    library: ['WebpackTest', '[name]'],
    libraryTarget: "umd",
    publicPath: 'out/',
  },
  optimization: {
    splitChunks: {
        cacheGroups: {
            // projectLib: {
            //     test: (module, chunks) => module.context == ProjectLibDir,
            //     name: "projectLib",
            //     chunks: "all",
            //     minChunks: 1,
            //     minSize: 0,
            //     priority: 20,
            //     enforce: true
            // },
            vendors: {
                test: (module, chunks) => module.depth > 0,
                name: "vendors",
                chunks: "all",
                minChunks: 1,
                minSize: 0,
                priority: 10,
                enforce: true
            }
        }
    },
    runtimeChunk: { name: "manifest" },
  },
  plugins: [
    new CleanWebpackPlugin()
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./build/manifest.json')
    // })
  ],
};