const http = require('http');
const { parse } = require('path');
const users = [];

const server = http.createServer((req, res) =>{
    const url = req.url;
    const method = req.method;

    if (url === "/")
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Root page</title></head>');
        res.write('<body><h2>Greeting message</h2><h2> Enter your username: </h2><form action="/create_user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === "/users")
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User page</title></head>');
        res.write('<body><ul><li>user 1</li><li>user 2</li><li>user 3</li></ul></body>');
        res.write('</html>');
        for (let user of users)
        {
            console.log (user);
        }
        return res.end();
    }
    if (url === "/create_user" && method === "POST")
    {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk); 
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            users.push(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
})

server.listen(3000);