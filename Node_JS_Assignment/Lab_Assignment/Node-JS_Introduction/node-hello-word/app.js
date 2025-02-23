const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200, { "content-type" : "text/plain" });
    res.end("Hello World");
})

server.listen(5000, () => {
    console.log("Server running on port 5000");
})