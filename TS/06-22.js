var names = ['alice', 'tom', 'bob'];
names.forEach(function (item) {
    console.log(item.toUpperCase());
});
function greeter(fn) {
    fn('hello world');
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
function greet(person) {
    return 'Hello, ' + person.name;
}
var writablePerson = {
    name: 'michael jackson',
    age: 40
};
// 复写
var readonlyPerson = writablePerson;
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
