const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/a9d047e203cfe0c3c8b38792be3d6c94/' + lat + ','+long
    request({url, json: true}, (error, { body} ) => {
        
        if(error){
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else{
            callback(undefined, body.daily.data[0].summary+ "It is currently " +body.currently.temperature+ " degrees out. There is a "+body.currently.precipProbability+ "% chance of rain")
        }
    })
}
module.exports = forecast