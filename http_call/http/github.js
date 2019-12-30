const https = require('https');

let username = 'msotomayor95';

let CHROME_USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Geko) Chrome/41.0.2228.0 Safari/537.36';
let options = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: { 'user-agent' : CHROME_USER_AGENT}
};

let request = https.request(options, (response) => {
    let body = '';
    response.on('data', (out) => {
        body += out;
    });

    response.on('end', (out) => {
        let json = JSON.parse(body);
        console.log(json);
    });

})

request.on('error', (e) =>{
    console.log(e);
})

request.end();