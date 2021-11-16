const { createServer } = require("http");

const server = createServer((req, res) => {
  res.end("hello");
});

server.listen(3333, () => console.log(3333));
