class EventEmitter {
  constructor() {
    // key: 事件名
    // value: callback [] 回调数组
    this.events = {}
  }
  on(name, callback) {
    if (this.events[name]) {
      this.events[name].push(callback)
    } else {
      this.events[name] = [callback]
    }
  }
  off(name, callback) {
    if (!this.message[name]) return;
    if (!callback) {
      // 如果没有callback,就删掉整个事件
      this.message[name] = undefined;
    }
    this.message[name] = this.message[name].filter((item) => item !== callback);

  }
  emit(name, ...args) {
    if (!this.events[name]) return
    this.events[name].forEach(cb => cb(...args))
  }
}

class _EventEmitter {
  constructor() {
    this.event = new Map()
  }

  on(target, fn) {
    let events = this.event.get(target)
    if (!events) {
      events = []
      this.event.set(target, events)
    } 
    events.push(fn)
  }

  off(name, callback) {
    const events = this.event.get(name)
    if (!events) return undefined
    const index = events.indexOf(callback)
    if (index) events.splice(index, 1)
  }

  emit(target, ...args) {
    const events = this.event.get(target)
    if (!events) return undefined
    for (const fn of events) {
      fn(...args)
    }
  }
}

//test
let eventsBus = new _EventEmitter()
let fn1 = function(name,age){
  console.log(name,age)
}
let fn2 = function(name,age){
  console.log('fn',name,age);
}
eventsBus.on("test",fn1)
eventsBus.on("test",fn2)
eventsBus.emit("test","Jason",18)
eventsBus.off("test",fn2)
eventsBus.emit("test","Jason",18)
//Jason 18
//fn Jason 18



