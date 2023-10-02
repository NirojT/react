const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("hello");
  res.end("end");
});

server.listen(8181);
