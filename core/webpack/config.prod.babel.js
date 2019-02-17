const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
import appConfig from '../../config/app';

const buildPath = appConfig.buildPath ? appConfig.buildPath : 'dist';
const BUILD_PATH = __dirname + '/../../' + buildPath;
console.log(BUILD_PATH);

module.exports = {
    entry: './core/index.js',
    output: {
        path: BUILD_PATH,
        filename: './assets/bundle.js',
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: __dirname + '/../public/production.html',
            to: BUILD_PATH + '/index.html'
        }]),
        new ExtractTextPlugin({
            filename: './assets/styles.css'
        })
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                keep_fnames: true,
            }
        })],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
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
