const http = require('http');
const cal1 = require('./cal1');
const cal2 = require('./cal2');
const cal3 = require('./cal3');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`1 + 1 = ${cal1.add(1,1)}\n` +
          `2 - 10 = ${cal2.sub(2,10)}\n` +
          `3 * 7 = ${cal1.mul(3,7)}` );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});