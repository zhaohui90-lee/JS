/**
 * 动态类型
 *  JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。
 */

/**
 * 数据类型
 *  6种基本类型
 *   - undefined
 *   - Boolean
 *   - Number
 *   - String
 *   - BigInt
 *   - Symbol
 *  null
 *  Object
 *  记住 typeof 操作符的唯一目的就是检查数据类型，如果我们希望检查任何从 Object 派生出来的结构类型，
 *  使用 typeof 是不起作用的，因为总是会得到 "object"。检查 Object 种类的合适方式是使用 instanceof 关键字。但即使这样也存在误差。
 */
console.log(typeof []); // object

/**
 * 原始值
 *  在JavaScript中 除了Object类型之外 所有的类型都是不可变的（值本身无法被改变）
 *  JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变
 */
let s = 'string';
s = 'strings'; // 相当于返回了一个新的变量s 而不是修改了变量s的值

// bigInt类型
const x = 2n ** 53n;
console.log(x);
console.log(Number.MAX_VALUE);
// 可以对BigInt使用运算符+、*、-、**和%，就像对数字一样。BigInt 严格来说并不等于一个数字，但它是松散的。
// 在将BigInt转换为Boolean时，它的行为类似于一个数字：if、||、&&、Boolean 和!。
// BigInt不能与数字互换操作。否则，将抛出TypeError。

/**
 * Symbol类型
 * 符号类型是唯一的并且是不可修改的, 并且也可以用来作为Object的key的值(如下).
 */
let mySymbol = Symbol();
console.log(typeof mySymbol);

var myPrivateMethod = Symbol();
this[myPrivateMethod] = function() {};

/**
 * 对象
 * 在计算机科学中, 对象是指内存中的可以被 标识符引用的一块区域.
 */