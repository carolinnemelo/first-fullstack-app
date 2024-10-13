import http from "http";

const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.write("Hello world!");
  res.end()
}).listen(port);

 