const pg = require('pg');
const config = {
    host: 'localhost',
    user: 'me',
    database: 'nodecomplete',
    password: 'password',
    port: '5432'
};
const pool = new pg.Pool(config);
module.exports = pool;