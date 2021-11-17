const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("hello");
});

server.listen(8080, () => console.log(8080));
