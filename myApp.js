const http = require('http');
var colors = require('colors');
const displayContent = require("./routes");

const server = http.createServer(displayContent);

server.listen(3001);

console.log('hello'.green);