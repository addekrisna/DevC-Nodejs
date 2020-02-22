const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    res.end ("Hello world");
});

server.listen(3000, () =>  {
    console.log("Server Running on port 3000");
});