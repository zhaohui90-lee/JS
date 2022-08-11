// Disposable mixin
class Disposable {
    dispose() {
        this.isDisposable = true;
    }
}
// Activatable mixin
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
class SmartObject {
    constructor() {
        // Disposable
        this.isDisposable = false;
        // Activatable
        this.isActive = false;
        setInterval(() => console.log(this.isActive + ':' + this.isDisposable), 500);
    }
    interact() {
        this.activate();
    }
}
applyMixin(SmartObject, [Disposable, Activatable]);
let smartObject = new SmartObject();
setTimeout(() => smartObject.interact(), 500);
////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////
function applyMixin(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
