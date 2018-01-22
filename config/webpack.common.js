const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = require('./paths');


const commonConfig = merge([{
    entry: ["babel-polyfill", paths.appJS],
    output: {
        pathinfo: true,
        path: paths.public,
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new CleanWebpackPlugin([ paths.public ], {
            root: paths.root,
                // exclude:  ['index.html'],
            verbose: true,
            dry: false,
            
            watch: false,
            allowExternal: false
        }),
        new HtmlWebpackPlugin({
          inject: true,
          template: paths.appHtml
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'node-static',
            filename: 'node-static.js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
        // new BundleAnalyzerPlugin({
        //     static: true
        // })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                'react', 
                                'stage-0',
                                [
                                    'env', 
                                    {
                                        "targets": ["last 2 Chrome versions"]
                                    }
                                ]
                            ]
                        }
                    }
                ],
                exclude(path) {
                    // exclude: /(node_modules|bower_components)/,
                    return path.match(/node_modules/) || path.match(/bower_components/);
                }
            }   
        ]
    },
}]);

module.exports = commonConfig;