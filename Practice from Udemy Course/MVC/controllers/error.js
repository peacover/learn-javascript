exports.get404 = ((req, res, next) => {
    // console.log("dirname path : ", __dirname);
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
    res.status(404).render('404', { pageTitle: 'Page Not Found!'});
});