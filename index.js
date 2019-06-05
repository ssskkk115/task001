const request = require('request');

var options = {
  url: 'https://qiita.com/api/v2/tags/?page=1&per_page=20&sort=count',
  method: 'GET',
  json: true
}

request(options, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

