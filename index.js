let http = require('http');

// process.env.PORT lets the port be set by heruko
let port = process.env.PORT || 8080;

http.createServer(function(req, res){
    res.writeHead(200);
    res.write("Amanda Leighton Schjoedt er en cutie\n");
    res.write("Amanda Leighton Schjoedt er en cutie\n");
    res.write("Amanda Leighton Schjoedt er en cutie\n");
    res.write("Amanda Leighton Schjoedt er en cutie\n");
    res.write("Amanda Leighton Schjoedt er en cutie\n");
    res.end();
}).listen(port);

console.log("Listening on the port " + port + "...");