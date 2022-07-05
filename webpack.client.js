const path = require('path');
module.exports = {
    target: 'web',
    mode: 'development',
    entry: path.resolve(__dirname, './src/client/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
    },
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