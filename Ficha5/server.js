const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

function readFile(fileName){
    var file = fs.readFileSync(fileName);
    return file;
}
app.get('/', function(req, res){
    res.send("SUPPPPPP DUDESSSSSSSSS");
})
app.get('/users',function(req,res){
    var a = readFile('./persons.json');
    res.send(a);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))