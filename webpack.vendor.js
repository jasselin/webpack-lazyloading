const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    node: {
            dns: 'empty',
            net: 'empty'
    },
    entry: {
        vendor: [
            'promise-polyfill',
            'fetch',
            'lodash'
        ]
    },
    output: {
        filename: '[name].js',
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