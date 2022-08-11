// Promise.prototype.catch
// Promise.prototype.then
// Promise.prototype.finally

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo')
  }, 300)
})

const myPromise2 = 111

const myPromise3 = Promise.resolve(2)

Promise.all([myPromise1, myPromise2, myPromise3]).then(res => {
  console.log(res);
})