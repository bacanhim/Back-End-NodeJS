const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mysql = require("mysql");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'basededadosbacke'
});

connection.connect();

app.get('/persons', function (request, response) {
    connection.query("SELECT * FROM `persons`;", function (err, rows, fiels) {
        if (err) throw err;
        response.send(rows);
    });

})
app.post('/persons', function (request, response) {
    var values = request.body;
    connection.query("INSERT INTO `persons` set ?", values, function (err, rows, fiels) {
        if (err) throw err;
        response.send("Querry adicionada com sucesso");
    });
})

app.delete('/persons', function (request, response) {
    var values = request.body;
    connection.query("DELETE FROM `persons` where  ? ", values, function (err, rows, fiels) {
        if (err) throw err;
        response.send("Querry removida com sucesso");
    });
})

app.get('/persons/:id', function (request, response) {
    var id= request.params.id;
    connection.query("SELECT * FROM `persons` where `id` = ?",[id], function (err, rows, fiels) {
        if (err) throw err;
        response.send(rows);
    });
})
app.get('/persons/:age/:profession', function (request, response) {
    var id= request.params.age;
    var profession = request.params.profession;
    connection.query("SELECT * FROM `persons` where `age` = ? && `Profession` = ?",[age,profession], function (err, rows, fiels) {
        if (err) throw err;
        response.send(rows);
    });
})