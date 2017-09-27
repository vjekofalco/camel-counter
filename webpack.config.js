var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var headers = { "X-Webpack-Proxy": "true" };
var port = 4000;
var proxyHost = 'http://localhost:3000';

module.exports = {
    entry: './src/bundle.js',
    output: {
        path: path.resolve(__dirname, 'public/assets'),
        filename: 'bundle.js',
        publicPath: '/assets'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use : [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    devServer: {
        port,
        proxy: {
            '**': {
                target: proxyHost,
                secure: false,
                headers
            }
        },
        stats: 'errors-only',
        disableHostCheck: true
    }
}