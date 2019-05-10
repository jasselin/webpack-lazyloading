const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        vendor: [
            'lodash'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist', 'vendor'),
        library: '[name]',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname, 'build', 'manifest.json')
        })
    ]
};