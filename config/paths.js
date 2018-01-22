const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
console.log("App Directory: "+ appDirectory)

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	root: appDirectory,
	src: resolveApp('src'),
	public: resolveApp('public'),
	appHtml: resolveApp('src/index.html'),
	appJS: resolveApp('src/index.js'),
	bundle: resolveApp('public/bundle.js'),
	node_modules: resolveApp('node_modules'),
}