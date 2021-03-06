var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve, reject) {
		//var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=654665736c3d3790951d18712cd8116f&q='+location+'&units=imperial';
		//console.log(encodedLocation);

		if (!location) {
			return reject('no location provided');
		}
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if(error || typeof body.name === 'undefined'){
				reject('Unable to fetch weather');
			}else{
				//callback(JSON.stringify(body, null, 4));
				resolve('the temp is ' + body.main.temp + ' in ' + body.name);
			}
		});
	});


}

// module.exports = function (location, callback) {
// 	//move url here to build a new url
// 	console.log(location);
// 	//var encodedLocation = encodeURIComponent(location);
// 	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=654665736c3d3790951d18712cd8116f&q='+location+'&units=imperial';
// 	//console.log(encodedLocation);

// 	if (!location) {
// 		return callback('no location provided');
// 	}
// 	request({
// 		url: url,
// 		json: true
// 	}, function (error, response, body) {
// 		if(error || typeof body.name === 'undefined'){
// 			callback('Unable to fetch weather');
// 		}else{
// 			//callback(JSON.stringify(body, null, 4));
// 			callback('the temp is ' + body.main.temp + ' in ' + body.name);
// 		}
// 	});
// }