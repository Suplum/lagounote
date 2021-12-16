// Monad函子是可以变扁的Pointed函子，IO(IO(x))
// 一个函子如果具有join和of方法并遵守一定定律就是一个Monad

const fs = require('fs')
const fp = require('lodash/fp')

class IO {
  static of (value) {
    return new IO(function () {
      return value
    })
  }

  constructor(fn) {
    this._value = fn
  }

  map(fn) {
    // 把当前的value和传入的fn组合成一个新的函数
    return new IO(fp.flowRight(fn, this._value))
  }

  join() {
    return this._value()
  }

  flatMap(fn) {
    return this.map(fn).join()
  }
}

let readFile = function (filename) {
  return new IO(function () {
    return fs.readFileSync(filename, 'utf-8')
  })
}

let print = function (x) {
  return new IO(function () {
    console.log(x)
    return x
  })
}

let r = readFile('package.json')
  // .map(x => x.toUpperCase())
  .map(fp.toUpper)
  .flatMap(print)
  .join()

console.log(r)
