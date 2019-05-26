const request = require('request');

request('https://qiita.com/api/v2/tags/JavaScript', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});