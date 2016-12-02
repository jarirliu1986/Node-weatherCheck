var request = require('request');
var url = 'http://ipinfo.io/json';

module.exports = function (callback) {
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if (error) {
			callback('unable fetch location!');
		}else{
			//callback(JSON.stringify(body,null,4));
			callback(body);
		}
	})
}