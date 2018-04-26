const http = require("http");
const PORT = 8024;
const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

// Index.com favFoods Page
function handleRequest(req, res) {
  var path = req.url;
  switch (path) {
    case "/":
      return displayRoot(path, req, res);
    case "/index4routes.html":
      return displayfavFoods(path, req, res);
    default:
      return display404(path, req, res);
  }
}

function displayRoot(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>Favorite Foods</h1>" +
    "<a href='/index4routes.html'>Favorite Foods</a>" +
    "</body></html>";
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(myHTML);
}

function displayfavFoods(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>Favorite Foods</h1>" +
    "<a href='/index4routes.html'>I'm Hungry/a>" +
    "</body></html>";

  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(myHTML);
}

// FavMovies page
function handleRequest(req, res) {
  var path = req.url;
  switch (path) {
    case "/":
      return displayRoot(path, req, res);
    case "/movies4routes.html":
      return displayfavFoods(path, req, res);
    default:
      return display404(path, req, res);
  }
}

function displayRoot(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>Favorite Movies</h1>" +
    "<a href='/movies4routes.html'>Favorite Movies</a>" +
    "</body></html>";
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(myHTML);
}

function displayfavMoviess(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>Favorite Movies</h1>" +
    "<a href='/movies4routes.html'>I'm Hungry/a>" +
    "</body></html>";

  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(myHTML);
}

// 404 ERROR
function display404(url, req, res) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  res.writeHead(404, {
    "Content-Type": "text/html"
  });

  res.end(myHTML);
}
