const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededadosbacke'
});
//connection.connect();
console.log("MySQL connection created at %s with database: %s", connection.config.host, connection.config.database);

exports.author_detail = function (req,res,next){
    var userId = req.params.id;
    connection.query("SELECT * FROM `persons` where `id` = ?",[userId], function (err, result, fiels) {
        if (err) throw err;
        res.render('persons',{title : 'Person Detail',person: result[0]});
        // res.send(result[0]);
    });
}