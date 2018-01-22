const merge = require('webpack-merge');
const prodConfig = require('./webpack.production');
const devConfig = require('./webpack.development');

// const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const merge = require('webpack-merge');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const paths = require('./paths');
// const parts = require('./webpack.parts');


// const commonConfig = {
//     entry: ["babel-polyfill", paths.appJS],
//     output: {
//         pathinfo: true,
//         path: paths.public,
//         filename: 'bundle.js',
//         chunkFilename: '[name].bundle.js'
//     },
//     plugins: [
//         new CleanWebpackPlugin([ paths.public ], {
//             root: paths.appDirectory,
//             // exclude:  ['index.html'],
//             verbose: true,
//             dry: false,
//             watch: false,
//             allowExternal: false
//         }),
//         new HtmlWebpackPlugin({
//           inject: true,
//           template: paths.appHtml
//         }),
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'node-static',
//             filename: 'node-static.js',
//             minChunks(module, count) {
//                 var context = module.context;
//                 return context && context.indexOf('node_modules') >= 0;
//             },
//         }),
//     ],
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 loader: 'babel-loader',
//                 exclude: /(node_modules|bower_components)/,
//                 query: {
//                     presets: [
//                         'react', 
//                         'stage-0',
//                         ['env', {
//                             "targets": ["last 2 Chrome versions"]
//                         }]
//                     ]
//                 }
//             }
//         ]
//     },
// };

// const devConfig = merge(
//     {
//         devServer: {
//             historyApiFallback: true
//         }
//     },
//     {
//         devServer: parts.devServer({
//             host: process.env.HOST,
//             port: process.env.PORT,
//         })
//     },
//     {
//         plugins: [
//             new webpack.WatchIgnorePlugin([paths.node_modules]),
//         ]
//     }
// );

// const prodConfig = merge({});

// console.log("=============DEV CONFIG==========================");
// console.log(devConfig);
// console.log("===========================================================");
// console.log("=======================PRODUCTION CONFIG========================");
// console.log(prodConfig);
// console.log("===========================================================");



module.exports = (env) => {
    if(env == "production") {
        return prodConfig;
    }

    return devConfig;
}









