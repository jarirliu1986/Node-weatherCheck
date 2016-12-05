var request = require('request');
var url = 'http://ipinfo.io/json';

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject();
			}else{
				resolve(body);
			}
		})
	})
}

// module.exports = function (callback) {
// 	request({
// 		url: url,
// 		json: true
// 	}, function (error, response, body) {
// 		if (error) {
// 			callback();
// 		}else{
// 			// console.log('--------------');
// 			// console.log(JSON.stringify(body,null,4));
// 			// console.log(body);
// 			// console.log('--------------');
// 			callback(body);
// 		}
// 	})
// }