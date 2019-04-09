var Emitter = require('./emitter.js');
var eventConstants = [];
eventConstants.on = emit.on(event_name,function(){
    console.log('Sup dudes');
});
eventConstants.emit = Emitter.emit(event_name);
module.exports = eventConstants;