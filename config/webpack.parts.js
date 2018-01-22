const webpack = require('webpack');
const paths = require('./paths');
const WriteFilePlugin = require('write-file-webpack-plugin');

exports.devServer = ({host, port} = {}) => ({
	devServer: {
		// stats: "errors-only",
		host,
		port,
		overlay: {
			errors: true,
			warning: true
		},
		historyApiFallback: true,
    // hotOnly: true,
	}
});

exports.devPlugins = () => ({
    plugins: [
        new WriteFilePlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.WatchIgnorePlugin([paths.node_modules]),
        // new webpack.NamedModulesPlugin(),
    ]
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        include,
        exclude,
        use: {
          loader: "file-loader",
          options: {
              name: "[name].[ext]"
          }
        },
      },
    ],
  },
});


