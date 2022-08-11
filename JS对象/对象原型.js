
/**
 * 使用JavaScript中的原型
 *  基于原型的语言 每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性
 *  准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的prototype属性上，而非对象实例本身。
 * */
function DoSomething() { }
DoSomething.prototype.foo = 'bar';
var doSomethingInstance = new DoSomething();
doSomethingInstance.prop = 'some value';
// console.log(doSomethingInstance);
// console.log(DoSomething.prototype);

// console.log("doSomeInstancing.prop:      " + doSomethingInstance.prop);   // some value
// console.log("doSomeInstancing.foo:       " + doSomethingInstance.foo);    // bar
// console.log("doSomething.prop:           " + DoSomething.prop);           // undefined
// console.log("doSomething.foo:            " + DoSomething.foo);            // undefined
// console.log("doSomething.prototype.prop: " + DoSomething.prototype.prop); // undefined
// console.log("doSomething.prototype.foo:  " + DoSomething.prototype.foo);  // bar

/**
 * 理解原型对象
 * person1.valueOf()
 *  浏览器首先检查 <code>person1</code>是否有<code>valueOf</code>方法
 *  如果没有 浏览器继续检查<code>person1</code>的原型对象（即Person构造函数的prototype属性指向的对象）是否有可用的<code>valueOf</code>方法
 *  如果也没有 浏览器检查Person()构造函数的prototype属性指向的原型对象（即Object构造函数的prototype属性所指向的对象）是否有可用的<code>valueOf</code>方法
 * 
 *  必须重申，原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过前面所说的“原型链”的方式。
 * */
// console.log(doSomethingInstance);


/**
 * prototype属性 继承成员被定义的地方
 *  继承的属性和方法是定义在 prototype 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 Object.prototype. 
 *  开头的属性，而非仅仅以 Object. 开头的属性。prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。
 *  
 *  
*/
// console.log(DoSomething.prototype);
// console.log(doSomethingInstance.__proto__);
// console.log(doSomethingInstance.__proto__.__proto__);
// console.log(Object.getPrototypeOf(doSomethingInstance));

/**
 * Object.prototype.__proto__ 
 *  该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。
 *  通过现代浏览器的操作属性的便利性，可以改变一个对象的 [[Prototype]] 属性, 这种行为在每一个JavaScript引擎和浏览器中都是一个非常慢且影响性能的操作，
 *  使用这种方式来改变和继承属性是对性能影响非常严重的，并且性能消耗的时间也不是简单的花费在 obj.__proto__ = ... 语句上, 它还会影响到所有继承来自该 [[Prototype]] 的对象，
 *  如果你关心性能，你就不应该在一个对象中修改它的 [[Prototype]]。相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()。
*/

/**
 * Object.create()
 *  建议替代Object.prototype.__proto__ 
 *  Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。 （请打开浏览器控制台以查看运行结果。）
 *  
*/
// const prototype1 = {};
// const object1 = Object.create(prototype1);
// console.log(Object.getPrototypeOf(object1) === prototype1); // true

/**
 * 继承多个对象 可以使用混入的方式
 * 
*/
function SuperClass() { }

function OtherSuperClass() { }

function MyClass() {
  SuperClass.call(this);
  OtherSuperClass.call(this);
}

// 继承一个类 getPrototypeOf 返回指定对象的原型
MyClass.prototype = Object.getPrototypeOf(SuperClass);
// 混合其他
Object.assign(MyClass.prototype, OtherSuperClass.prototype);

// 重新制定constructor
MyClass.prototype.constructor = MyClass;

MyClass.prototype.methods = function () {
  console.log('MyClass methods...');
}

let myClassInstance = new MyClass();
console.log(myClassInstance);

/**
 * constructor属性
 *  每个实例对象都从原型中继承了一个constructor属性，该属性指向了用于构造此实例对象的构造函数。
 * 
*/
