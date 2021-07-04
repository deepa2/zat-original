//https://forum.ionicframework.com/t/remove-console-logs-release/76590/8
let defaultConfig = require('@ionic/app-scripts/config/uglifyjs.config');

module.exports = Object.assign({}, defaultConfig, {
	compress: Object.assign({}, defaultConfig.compress, {
		drop_console: true,
		drop_debugger: true
	})
});