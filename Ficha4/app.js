var obj = {
    name: "papap",
    age: "12",
    gender: "F"
}
JSON.stringify(obj);
console.log(obj);

var str= '{"name": "pane", "age": "12", "gender": "F"}';
var obj2 = JSON.parse(str);
console.log(obj2.name);