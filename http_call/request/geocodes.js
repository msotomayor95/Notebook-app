const request = require('request');
const argv = require('yargs').argv;

let API_KEY;
let direction = argv.direction;
let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${direction},+CA&key=${API_KEY}`;

request({
    url: url,
    json: true
},(error, response, body) =>{
    console.log(body);
})