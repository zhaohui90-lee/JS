// mixin 混入
/**
 *
 */
class Sprite {
    constructor(name) {
        this.name = "";
        this.x = 0;
        this.y = 0;
        this.name = name;
    }
}
function Scale(Base) {
    return class Scaling extends Base {
        constructor() {
            super(...arguments);
            this._scale = 1;
        }
        setScale(scale) {
            this._scale = scale;
        }
        get scale() {
            return this._scale;
        }
    };
}
let passcode = "secret passcode";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee();
employee.fullName = 'bob smith';
if (employee.fullName) {
    alert(employee.fullName);
}
