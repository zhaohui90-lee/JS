// Disposable mixin
class Disposable {
  isDisposable: boolean;
  dispose() {
    this.isDisposable = true;
  }
}
// Activatable mixin
class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + ':' + this.isDisposable),
      500
    )
  }
  interact() {
    this.activate()
  }

  // Disposable
  isDisposable: boolean = false;
  dispose: () => void;
  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;

}

applyMixin(SmartObject, [Disposable, Activatable])

let smartObject = new SmartObject()
setTimeout(() => smartObject.interact(), 500)

////////////////////////////////////////
// In your runtime library somewhere
////////////////////////////////////////

function applyMixin(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}
