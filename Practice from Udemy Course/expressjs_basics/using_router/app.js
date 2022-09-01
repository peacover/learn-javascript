const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: true}));
app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);