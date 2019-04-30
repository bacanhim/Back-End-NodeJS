const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});

function writeLog(request, response) {
    var log = request.path + ", " + request.method + ", " + new Date() + "\n";
    fs.appendFile("log.txt", log, function (err) {
        if (err) throw err;
        console.log("Guardado");
    });
}

// app.get("/", function (request, response) {
//     writeLog(request,response);
//     response.writeHead (200,{'Content-type': 'text/plain'});
//     response.end("Hello World");
// });
// app.get("/", function (request, response) {
//     writeLog(request,response);
//     var html = fs.readFileSync("index.html","utf-8");
//     response.end(html);
// });
app.get("/user/:name", function (request, response) {
    writeLog(request, response);
    var html = fs.readFileSync("index.html", "utf-8");
    var username = request.params.name;
    var mensagem = "message Bem vindo " + username;
    var result = html.replace("{message}", mensagem);
    fs.writeFile("index.html", result);
    response.end(html);
});

// app.get("/user/:name", function (request, response) {
//     writeLog(request,response);
//     var username = request.params.name;
//     response.writeHead (200,{'Content-type': 'text/plain'});
//     response.end(username);
// });


app.get("/log", function (request, response) {
    writeLog(request,response);
    var log = fs.readFileSync("log.txt","utf-8");
    response.end(log);
});

app.get("/log", function (request, response) {
    writeLog(request,response);
    var log = fs.readFileSync("log.txt","utf-8");
    response.end(log);
});