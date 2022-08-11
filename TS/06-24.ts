// mixin 混入
/**
 * 
 */
class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

type Constructor = new (...arg: any[]) => {}

function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {

    _scale = 1;

    setScale(scale: number) {
      this._scale = scale
    }

    get scale(): number {
      return this._scale
    }
  }
}

let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee()
employee.fullName = 'bob smith';
if(employee.fullName) {
  alert(employee.fullName);
}