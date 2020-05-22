const TODOService = require('./services/TODOService');
const { createServer } = require('http');

const { findAllTodosUsingPromise } = new TODOService();
//todo app : Controller
const server = createServer(async (req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    try {
        const todos = await findAllTodosUsingPromise();
        res.write(JSON.stringify(todos));
    }
    catch (err) {
        res.write(JSON.stringify(err));
    }
    res.end();

});

server.listen(3000, function () {
    console.log('Server is Ready!');
});