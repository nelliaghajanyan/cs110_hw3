const http = require('http');

const httpServer = http.createServer(function(req, res) {

    if(req.url === '/hey') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hey you! You are wonderful!\n');
    }else if(req.url === '/motto') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('With hard work there is no wall between you and your dreams!\n');
    } 
    else if(req.url === '/hello'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World, its me!!\n');
    }
    else if(req.url === '/cs'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello world!CS110 rocks!!\n');
    }
   else if(req.url === '/h'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Love yourself ;)\n');
    }

    else if(req.url === '/boo'){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Everything is fine *_____* \n');
    }
          else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end("NO!  Try again... :D ");
    }
});

httpServer.listen(3001);
