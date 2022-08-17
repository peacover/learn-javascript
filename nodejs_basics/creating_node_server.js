// intellisense npm install @types/sequelize

const http = require('http');

// function rqListner(req, res) {

// }
// const server = http.createServer(rqListner);
// http.createServer(function(req, res){

// });

const server = http.createServer((req, res) => {
    console.log(req);
    // console.log(req.url, req.method, req.headers);
    ////////////// sending response to client //////////////
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();
});


server.listen(3000)
