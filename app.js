var weather = require('./weather.js');
var location = require('./location.js');
//setup yargs to have a --location or -l arguments
var argv = require('yargs')
		.option('location',{
			demand: false,
			alias: 'l',
			describe: 'the location',
			type: 'string'
		})
		.help('help')
		.argv;
//if location provided, call weather(location, callback)
//else call location, then weather(location, callback)
if (typeof argv.l ==='string' && argv.l.length > 0) {
	console.log('has location');
	weather(argv.l, function (currentWeather) {
		console.log(currentWeather);
	})
}else{
	console.log('no given location');
	location(function (location) {
		if (location) {
			weather(location.city, function (currentWeather) {
				console.log(currentWeather);
			})
		}else{
			console.log('unable to guess location');
		}
	})
}


// weather(function (currentWeather) {
// 	console.log(currentWeather);
// });

// location(function (location) {
// 	if (!location) {
// 		console.log('unable to get the location');
// 		return;
// 	}
// 	console.log('city: ' + location.city);
// 	console.log('lon/lat: ' + location.loc);
// });

