const path = require('path');
const rootDir = require('../util/path');

exports.get404 = ((req, res, next) => {
    // console.log("dirname path : ", __dirname);
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});