This is an weather app.

How to run the app
1 run the following command to install the dependencies
$npm install

2 run the command
$node app.js -l locationName
to display the weather information of specified city


Weather url used in the project
	http://api.openweathermap.org/data/2.5/weather?appid=654665736c3d3790951d18712cd8116f&q=London,uk&units=imperial

default (current) location from:
	http://ipinfo.io/json
	body:
	{
	  "ip": "76.126.209.47",
	  "hostname": "c-76-126-209-47.hsd1.ca.comcast.net",
	  "city": "Sunnyvale",
	  "region": "California",
	  "country": "US",
	  "loc": "37.3697,-122.0214",
	  "org": "AS7922 Comcast Cable Communications, LLC",
	  "postal": "94086"
	}