var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log('client request URL: ', request.url);

    if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('./views/newcar.html', 'utf8', function (errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    }
    else if (request.url.match(/\/images\/\w+\.\w+/i) != null) {
        var found = request.url.match(/\/images\/(\w+\.(\w+))/i);
        var imagename = found[1];
        var imagefiletype = found[2];
        console.log(imagename);
        console.log(imagefiletype);
        fs.readFile("./images/"+imagename, function (errors, contents) {
            response.writeHead(200, { 'Content-type': "image/"+imagefiletype });
            response.write(contents);
            response.end();
        })
    }
    else {
        response.end("404: Page Not Found");
    }
});

var port = 8000;
server.listen(port);
console.log("running in localhost at port: " + port.toString());