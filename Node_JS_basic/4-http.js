const http = require('node:http');

const app = http
  .createServer((req, response) => {
    response.writeHead(200, {
      'Content-Type': 'plain/text',
    });
    response.end('Hello Holberton School!');
  })
  .listen(1245);

module.exports = app;
