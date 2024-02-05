const http = require('http');
const util = require('node:util');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http
  .createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
      res.write('Hello Holberton School!');
    }
    if (req.url === '/students') {
      res.write('This is the list of our students\n');
      try {
        const result = await countStudents(process.argv[2]);
        res.write(result.join('\n'));
      } catch (error) {
        res.write(error.message);
      }
    }
    res.end();
  })
  .listen(port);

module.exports = app;
