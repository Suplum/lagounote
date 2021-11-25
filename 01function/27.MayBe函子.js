// 我们在编程过程中可能会遇到很多错误，需要兑这些错误做相应的处理
// MayBe函子的作用就是可以对外部的空值情况做处理（控制副作用在允许的范围）

class MayBe {
  static of (value) {
    return new MayBe(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this._value))
  }

  isNothing() {
    return this._value === null || this._value === undefined
  }
}

// let r = MayBe.of('Hello World')
//   .map(x => x.toUpperCase())
// console.log(r)

// let r = MayBe.of(null)
//   .map(x => x.toUpperCase())
// console.log(r)

let r = MayBe.of('hello world')
  .map(x => x.toUpperCase())
  .map(x => null)
  .map(x => x.split(' '))
console.log(r)
