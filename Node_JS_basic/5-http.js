const http = require('node:http');
const countStudents = require('./3-read_file_async');

const app = http
  .createServer((req, res) => {
    const { url } = req;
    res.writeHead({ 'Content-Type': 'text/plain' });
    if (url === '/') {
      res.end('Hello Holberton School!');
    }
    if (url === '/students') {
      const data = countStudents('database.csv');
      res.end(data);
    }
  })
  .listen(1245);

module.exports = app;
