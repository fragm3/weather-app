const request = require("request");

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/aadf6d1cc0494f0407943836b84422c4/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    } else if(response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
