function welcome(user) {
    console.log(user.id);
}
function verify(result) {
    if (result === 'pass') {
        console.log('Passed');
    }
    else {
        console.log('Failed');
    }
}
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
