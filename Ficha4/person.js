function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;  
}

Person.prototype.getAge = function (age) {
    this.age = age;
}

Person.prototype.greet = function () {
    console.log("Hello " + this.firstName + " " + this.lastName + ' ' + this.age);
}

var bits = new Person("Bits", "Unknown", 20);
bits.getAge(20);
var banana = new Person("Joana", "Banana",20);
banana.getAge(255);
bits.greet();
banana.greet();

console.log(bits.__proto__ === banana.__proto__);
