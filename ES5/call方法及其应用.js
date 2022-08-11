
// 'use strict';
// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
// 语法： function.call(thisArg, arg1, arg2, ...)
// 参数：
//  thisArg 
//    可选的。在 function 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：
//    如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。
//  arg1, arg2, ...
//    指定的参数列表。


// 使用call方法调用父构造函数
function Product(name, value) {
  this.name = name
  this.value = value
}
function Food(name, value) {
  Product.call(this, name, value)
  this.category = 'food'
}
function Toy(name, value) {
  Product.call(this, name, value)
  this.category = 'toy'
}
var cheese = new Food('feta', 10)
var fun = new Toy('robot', 20)
console.log(cheese);
console.log(fun);

// 使用 call 方法调用匿名函数
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];
for (var i = 0; i < animals.length; i++) {
  (function (i) {
    this.print = function () {
      console.log(animals[i].species + ':' + animals[i].name);
    }
    this.print()
  })(i)
}

// 使用 call 方法调用函数并且指定上下文的 'this'
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ')
  console.log(reply);
}
var animal = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
}
greet.call(animal)

// 使用 call 方法调用函数并且不指定第一个参数（argument）

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen