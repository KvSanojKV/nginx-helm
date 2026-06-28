const http = require('http');

http.createServer((req, res) => {
  res.end("nginx test using gihub action+helm V3\n");
}).listen(3000);

