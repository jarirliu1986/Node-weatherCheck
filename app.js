var weather = require('./weather.js');
var location = require('./location.js');
var argv = require('yargs')
		.option('location',{
			demand: false,
			alias: 'l',
			describe: 'the location',
			type: 'string'
		})
		.help('help')
		.argv;

if (typeof argv.l ==='string' && argv.l.length > 0) {
	console.log('has location');
	weather(argv.l).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error);
	})
}else{
	console.log('no given location, fetch the weather in current location');
	location().then(function (location) {
		return weather(location.city);
	}).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch(function (error) {
		console.log(error);
	})
}

//if location provided, call weather(location, callback)
//else call location, then weather(location, callback)
// if (typeof argv.l ==='string' && argv.l.length > 0) {
// 	console.log('has location');
// 	weather(argv.l, function (currentWeather) {
// 		console.log(currentWeather);
// 	});
// }else{
// 	console.log('no given location');
// 	location(function (location) {
// 		if (location) {
// 			weather(location.city, function (currentWeather) {
// 				console.log(currentWeather);
// 			})
// 		}else{
// 			console.log('unable to guess location');
// 		}
// 	})
// }


