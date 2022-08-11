/**
 * JavaScript的基本类型
 * Number 数字
 * BigInt 可以表示任意精度的整数
 * String 字符串
 * Boolean 布尔
 * Symbol 符号（ES2015新增）
 * Object 对象
 *  - Function 函数
 *  - Array 数组
 *  - Date 日期
 *  - RegExp 正则表达式
 * null 空
 * undefined 未定义
 */

/**
 * 数字 Number
 * 根据语言规范，JavaScript 采用“遵循 IEEE 754 标准的双精度 64 位格式”（"double-precision 64-bit format IEEE 754 values"）表示数字
 */
console.log(3 / 2); // 1.5 not 1
console.log(Math.floor(3 / 2)); // 1
console.log(parseInt(010)); // 8 识别为8进制
console.log(parseInt(0x10)); // 16
console.log(1 / 0); // Infinity
console.log(-1 / 0); //  -Infinity

/**
 * 字符串
 * JavaScript 中的字符串是一串Unicode 字符序列。
 */
 "hello".charAt(0); // "h"
 "hello, world".replace("world", "mars"); // "hello, mars"
 "hello".toUpperCase(); // "HELLO"

 /**
  * 其他类型
  * 与其他类型不同，JavaScript 中的 null 表示一个空值（non-value），
  * 必须使用 null 关键字才能访问，undefined 是一个“undefined（未定义）”类型的对象，表示一个未初始化的值，也就是还没有被分配的值。
  * JavaScript 允许声明变量但不对其赋值，一个未被赋值的变量就是 undefined 类型。还有一点需要说明的是，undefined 实际上是一个不允许修改的常量。
  */
/**
 * 布尔类型
 * false、0、空字符串（""）、NaN、null 和 undefined 被转换为 false
 * 所有其他值被转换为 true
 */
Boolean(''); // false
Boolean(12); // true

console.log(1 == true); // true

/**
 * 控制结构
 * 循环 while do while if else 三元运算符
 */

/**
 * 对象
 * JavaScript 中的对象，Object，可以简单理解成“名称-值”对（而不是键值对：现在，ES 2015 的映射表（Map），比对象更接近键值对）
 */
// 对象字面量
let obj = {
  name: 'zhangsan',
  _for: 'Max',
  details: {
    color: 'orange',
    size: 12
  }
}
obj.details.color; // orange
obj.name; // zhangsan
// 对象原型
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 定义对象
let p = new Person('lisi', 20);
// 点表示法访问
p.name = 'wangwu';
p.age = 30;
// 括号表示法
p['name'] = '李四';
p['age'] = 20;
/**
 * 这两种方法在语义上也是相同的。第二种方法的优点在于属性的名称被看作一个字符串，
 * 这就意味着它可以在运行时被计算，缺点在于这样的代码有可能无法在后期被解释器优化。它也可以被用来访问某些以预留关键字作为名称的属性的值：
 */


/**
 * 数组
 * JavaScript 中的数组是一种特殊的对象。它的工作原理与普通对象类似（以数字为属性名，但只能通过[] 来访问），
 * 但数组还有一个特殊的属性——length（长度）属性。这个属性的值通常比数组最大索引大 1。
 */
 var a = new Array();
 a[0] = "dog";
 a[1] = "cat";
 a[2] = "hen";
 a.length; // 3

var b = ["dog", "cat", "hen"];
b[100] = "fox";
b.length; // 101
console.log(b);

// 遍历数组的方法 foreach
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
  // 操作 currentValue 或者 array[index]
  console.log(currentValue, index, array);
});

/**
 * 函数
 * 
 */
function Person1(first, last) {
  this.first = first;
  this.last = last;
}
Person1.prototype.fullName = function() {
  return this.first + ' ' + this.last;
}
Person1.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
}

let s = new Person1('silmon', 'will');
console.log(s.fullName());

/**
 * constructor 构造函数
 * ...args 剩余参数
 */
function trivialNew(constructor, ...args) {
  var o = {}; // 创建一个对象
  constructor.apply(o, args);
  return o;
}

let bill = trivialNew(Person1, 'silmon', 'will'); // 等价于 new Person1('silmon', 'will');
console.log(bill); // { first: 'silmon', last: 'will' }

/**
 * 内部函数
 */
function parentFunc() {
  var a = 1;

  function nestedFunc() {
    var b = 4; // parentFunc 无法访问 b
    return a + b;
  }
  return nestedFunc(); // 5
}
/**
 * 闭包
 * 一个闭包，就是 一个函数 与其 被创建时所带有的作用域对象 的组合。
 */
function makeAdder(aa) {
  console.log(aa);
  // console.log(bb);
  return function(bb) {
    return aa + bb;
  }
}
let f1 = makeAdder(1);
console.log(f1(2));