function resolve2seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}

async function asyncCall() {
  console.log('calling');
  const result = await resolve2seconds()
  console.log(result);
}

asyncCall()