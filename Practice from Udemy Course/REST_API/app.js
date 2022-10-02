import bodyParser from 'body-parser';
import express from 'express'
import router from './routes/feed.js'
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorizaton');
    next();
});
app.use('/feed', router);
app.listen(8080);