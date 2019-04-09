var obj = {
    name: "papap",
    age: "12",
    gender: "F"
}
JSON.stringify(obj);
// console.log(obj);
var str= '{"name": "pane", "age": "12", "gender": "F"}';
var obj2 = JSON.parse(str);
// console.log(obj2.name);
var Emitter=require('./emitter.js');
var events=require('./constants.js');
var eventsConstants=new events();
var emit = new Emitter();
emit.on('start',function(){
    console.log('Sup dudes');
});
emit.emit('start');