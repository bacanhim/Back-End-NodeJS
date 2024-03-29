var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var flash = require('connect-flash');
var app = express();

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // set up ejs for templating

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }})); // Use the session middleware
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

var a = require('./lorem.js');

// express server
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port);   
});

app.get("/",function(req,res){
    res.send(a);
});
