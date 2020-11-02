let http = require('http');

// process.env.PORT lets the port be set by heruko
let port = process.env.PORT || 8080;

http.createServer(function(request, response){
    response.writeHead(200);
    response.write("Hello World");
    response.end();
}).listen(port);

console.log("Listening on the port " + port + "...");