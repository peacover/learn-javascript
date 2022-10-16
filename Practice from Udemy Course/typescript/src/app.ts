import bodyParser from 'body-parser';
import express from 'express'
import routes from './routes/route'

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen({ port: 3000 }, () => {
    console.log("server started!");
});
