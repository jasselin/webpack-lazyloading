const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        'vendor': [
            'lodash',
            'jquery'
        ]
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.join(__dirname, 'dist'),
        library: '[name]'
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'build', 'manifest.json')
        })
    ]
};