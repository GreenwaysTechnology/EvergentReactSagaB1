//networking : http
const http = require('http');

//non blocking web servers and web apps

//create server

const server = http.createServer(function (req, res) {
    //handle request and response
    res.write('<h1>Hello Node Web App</h1>');
    //close the stream
    res.end();

});

//start server
server.listen(3000, function () {
    console.log('Server listens')
});

//server events
server.on('request', function (req, res) {
    console.log(`${req.url} - ${req.method}`)
});

