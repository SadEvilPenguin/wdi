const http = require('http');
const urlParser = require('url');

const server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
    var urlObj = urlParser.parse(request.url);
    var pathname = urlObj.pathname;

    const pages = [{ title: "Welcome to my server" }, { title: 'Fun Times', list: ['<li>Watch Soccer</li>', '<li>Got To Movies</li>', '<li>Read a book</li>'] }, { title: "Favorite Movies", list: ["<li>Back to the Future 1</li>", "<li>Back to the Future 2</li>", "<li>Back to the Future 3</li>"] }, { title: "Coming Soon" }, { title: "404: File not found" }];

    console.log(request.url);

    response.writeHead(200, { 'Content-Type': 'text/html' });

    response.write('<html>');
    /*if (pathname === '/') {
        response.write(`<h1>${pages[0].title}</h1>`);
    } else if (pathname === '/fun-times') {
        response.write(`<h1>${pages[1].title}</h1>`);
        response.write(`<ul>${pages[1].list}</ul>`);
    } else if (pathname === '/movies') {
        response.write(`<h1>${pages[2].title}</h1>`);
        response.write(`<ul>${pages[2].list}</ul>`);
    } else if (pathname === '/portfolio') {
        response.write(`<h1>${pages[3].title}</h1>`);
    } else {
        response.write(`<h1>${pages[4].title}</h1>`);
    }*/

    switch (pathname) {
        case '/':
            response.write(`<h1>${pages[0].title}</h1>`);
            break;
        case '/fun-times':
            response.write(`<h1>${pages[1].title}</h1>`);
            response.write('<ul>');
            pages[1].list.forEach(function(element) {
                response.write(element);
            });
            response.write('</ul>');
            break;
        case '/movies':
            response.write(`<h1>${pages[2].title}</h1>`);
            response.write('<ul>');
            pages[2].list.forEach(function(element) {
                response.write(element);
            });
            response.write('</ul>');
            break;
        case '/portfolio':
            response.write(`<h1>${pages[3].title}</h1>`);
            break;
        default:
            response.write(`<h1>${pages[4].title}</h1>`);
    };

    response.write('<script>console.log("I\'m client-side JavaScript being sent via server-side JavaScript");</script>');
    response.write('</html>');
    response.end();
});