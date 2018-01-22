const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const parts = require('./webpack.parts.js');
const paths = require('./paths');

const devConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    parts.devPlugins(),
    parts.loadCSS(),
    parts.loadImages()
]);

// console.log("=================================");
// console.log(devConfig.plugins.map(plugin => plugin));
// console.log("===================================");

const devCon = merge(commonConfig, devConfig);
module.exports = devCon;