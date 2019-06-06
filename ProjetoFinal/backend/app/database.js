var mysql = require('mysql');
var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'trabalho'
});
console.log("MySQL connection created at %s with database: %s", connection.config.host, connection.config.database);
module.exports = connection;