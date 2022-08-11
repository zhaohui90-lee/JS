const names = ['alice', 'tom', 'bob']

names.forEach(item => {
  console.log(item.toUpperCase());
  
})

function greeter(fn: (a: string) => void) {
  fn('hello world')
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole)

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
}
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + ' returned ' + fn(6));
  
}


// 函数的重载
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);

// 对象类型
// function greet(person: {name: string, age: number}) {
//   return 'Hello, ' + person.name
// }

interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return 'Hello, ' + person.name
}

// 对象只读
interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}
let writablePerson: Person = {
  name: 'michael jackson',
  age: 40
}
// 对象指针的指向
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);


