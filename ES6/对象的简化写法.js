
// ES6 允许在大括号里面直接写变量和函数 作为对象的属性和方法
let name = '张三'
let change = function () {
  console.log('change...');
}
const SCHOOL = {
  name,
  change,
  improve() {
    console.log('improve...');
  }
}
console.log(SCHOOL);
