let http = require('http');

// process.env.PORT lets the port be set by heruko
let port = process.env.PORT || 8080;

http.createServer(function(request, respond){
    Response.writeHead(200);
    Response.write("Hello World");
    Response.end();
}).listen(port);

console.log("Listening on the port " + port + "...");