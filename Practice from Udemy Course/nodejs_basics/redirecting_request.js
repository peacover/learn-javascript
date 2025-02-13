const http = require('http');
const fs = require('fs');

// storing the response in a file and then redirect to the intial location ('/') 
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        // listening for the data to be sent
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk); 
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            /*fs.writeFileSync('message.txt', message); // this is a blocking function
            // res.writeHead(302, { 'Location': '/' });
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();*/

            fs.writeFile('message.txt', message, (err) => { // this is a non-blocking function
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
            // res.writeHead(302, { 'Location': '/' });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000)