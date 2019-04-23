const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

function readFile(fileName) {
    var file = fs.readFileSync(fileName);
    return file;
}
app.get('/', function (req, res) {
    res.send("SUPPPPPP DUDESSSSSSSSS");
})
app.get('/users', function (req, res) {
    var a = readFile('./persons.json');
    res.send(a);
})
app.post('/users', function (req, res) {
    var a = readFileSync('./persons.json');
    var jsonData = JSON.parse(a);
    var keys = Object.keys(jsonData);
    var keysLength = keys.length;
    keysLength++;
    jsonData["person" + keysLength] = req.body;
    var str = JSON.stringify(jsonData);
    fs.writeFileSync("./persons.json", str);
    res.send(a);
})
app.delete("/users/:id", function (req, res) {
    var a = readFileSync("./persons.json");
    var jsonData = JSON.parse(a);
    var id = req.params.id;
    delete jsonData["person" + id];
    var str = JSON.stringify(jsonData);
    fs.writeFileSync("./persons.json", str);
    res.send(a);
})
app.get("/users/:id", function (req, res) {
    var a = readFileSync("./persons.json");
    var jsonData = JSON.parse(a);
    var id = req.params.id;
    res.send(jsonData['person' + id]);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))