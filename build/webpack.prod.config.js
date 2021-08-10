const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const {smart} = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base.config');
const common = require('./common');
const styleLoaders = common.getStyleLoaders({
    cssModule: true,
});

module.exports = smart(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve('docs'),
        filename: 'js/[name].[contenthash:8].bundle.js',
        chunkFilename: 'js/[name].[contenthash:8].chunk.js',
        publicPath: '/mito-admin-demo/',
    },
    module: {
        rules: [].concat(styleLoaders),
    },
    plugins: [
        // new CopyWebpackPlugin([
        //     {
        //         from: 'src/assets/fonts/',
        //         to: 'fonts/',
        //     },
        // ]),
        // 用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去
        // 引入 moment 会把语言包也一起引入，但是一般的项目用不到那么多语言，这时候可以忽略打包语言包
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
        }),
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {
                    discardComments: {removeAll: true},
                    parser: require('postcss-safe-parser'),
                    autoprefixer: {disable: true}
                },
                canPrint: true
            }),
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                // include: ['src/'],
                exclude: /\.min\.js$/,
                parallel: true,
                cache: true,
                sourceMap: true,
            }),
        ],
        // 解析顺序发生变化，ID 也会随之改变，所以用hash来表示每个文件的唯一值
        moduleIds: 'hashed',
        splitChunks: {
            minSize: 3000,
            cacheGroups: {
                vendors: {
                    // 单页面应用：使用默认的就行了，因为就只有一个入口，只需要做代码分割
                    // "initial" 针对入口文件做代码分割 | "all" | "async"(默认就是异步，针对异步加载的模块做代分割)
                    // chunks: 'async',
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: 10,
                },
                // styles: {
                //     name: 'styles',
                //     test: /\.css$/,
                //     chunks: 'all',
                //     enforce: true
                // }
            }
        }
    },
});


