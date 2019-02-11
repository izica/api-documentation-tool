const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './core/index.js',
    output: {
        filename: './assets/bundle.js',
    },
    devServer: {
        contentBase: './core/public',
        publicPath: '/',
        hot: true,
        open: true,
        quiet: true,
        historyApiFallback: true,
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: __dirname + '/../public/production.html',
                to: __dirname + '/../../dist/index.html'
            }
        ]),
        new ExtractTextPlugin({
            filename: './assets/css/styles.css',
            allChunks: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: "css-loader",
                            options: {

                                url: false
                            }
                        }, {
                            loader: "postcss-loader",
                            options: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('autoprefixer')({
                                        browsers: ['ie >= 8', 'last 4 version']
                                    }),
                                    require('cssnano')()
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            'core': path.resolve(__dirname, '../core'),
            'components': path.resolve(__dirname, '../src/components'),
            'config': path.resolve(__dirname, '../../config'),
        },
    },
};
