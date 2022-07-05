const webpackNodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.resolve(__dirname, './src/server/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
    },
    externals: [webpackNodeExternals()],
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],  //resolve these extensions in order
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }]
    }
}