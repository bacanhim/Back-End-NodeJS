// require and instantiate express
var express = require('express');
var uuid = require("uuid/v1")
var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

//middlewares
app.use(express.static('public'));

// express server
var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port);
});

// route
app.get('/', function (req, res) {
    res.render('index.ejs');
});

var io = require('socket.io')(server);

// Registar o evento Connection

io.on("connection", (socket) => {
    socket.username = uuid();
    socket.on("send_message", (data) => {
        io.sockets.emit('broadcast_message', {
            message: data.message,
            username: socket.username
        });
    });
    socket.on("user_connected", (data) => {
        io.sockets.emit('broadcast_user', {
            username: socket.username
        });
    });
    socket.on("update_name", (data) => {
        io.sockets.emit("broadcast_updated_name", {
            old_user: socket.username,
            username: data.name,
        })
    })
    socket.on("disconnect", () => {
        io.sockets.emit('broadcast_user_disconnect', {
            username: data.username
        });
    })
});