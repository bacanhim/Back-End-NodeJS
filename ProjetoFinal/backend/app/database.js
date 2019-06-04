var connect ={ 
    connect: function (connection) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'trabalho'
        });
    console.log("connect a base de dados")
    } 
}
module.exports = connect;