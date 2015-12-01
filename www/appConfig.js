var exec = require('cordova/exec');

var AppConfig = function() {

}

AppConfig.prototype.test = function() {

	var onSuccess = function(msg) {
		console.log(msg);
	}
	var onError = function(e) {
		console.log(e);

	}

	exec(onSuccess, onError, 'AppConfig', 'test', []);
}

var appConfig = new AppConfig();

module.exports = appConfig; 