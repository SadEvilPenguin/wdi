const http = require('http');

const server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
    console.log(request.url);

    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.write('<html>Hello World!');
    response.write('<script>console.log("I\'m client-side JavaScript being sent via server-side JavaScript");</script>');
    response.write('</html>');
    response.end();
});