const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const parts = require('./webpack.parts');

const prodConfig = merge([
	parts.loadCSS(),
	parts.loadImages({
		options: {
		// 	limit: 15000,
			name: "[name].[ext]"
		}
	})
]);

const prod = merge(commonConfig, prodConfig);
module.exports = prod;