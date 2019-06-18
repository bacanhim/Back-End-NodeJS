$(function () {
    //make connection
    var socket = io.connect('http://localhost:3000')

    //buttons and inputs
    var message = $("#message");
    var send_message = $("#send_message");
    var chatroom = $("#chatroom");
    var feedback = $("#feedback");

    //Emit message
    send_message.click(() => {
        socket.emit("send_message", {
            message: message.val()
        })
    })

    //Listen on new_message

    
});