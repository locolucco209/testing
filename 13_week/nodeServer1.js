const http = require("http")

const PORT = 7000
// Defilne a port to listen for incoming requests

function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}
  const server = http.createServer(handleRequest);

  const logger = () => console.log("Server listening on: http://localhost:" + PORT)

server.listen(PORT, logger)



const PORT2 = 5150
// Defilne a port to listen for incoming requests

  const server2 = http.createServer(handleRequest);

  const logger2 = () => console.log("Server listening on: http://localhost:" + PORT2)

server2.listen(PORT2, logger2)
