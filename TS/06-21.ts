interface MyAccount {
  id: number,
  displayName: string,
  version: 1
}

function welcome(user: MyAccount) {
  console.log(user.id);
}

type Result = 'pass' | 'fail'

function verify(result: Result) {
  if(result === 'pass') {
    console.log('Passed');
  } else {
    console.log('Failed');
    
  }
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());