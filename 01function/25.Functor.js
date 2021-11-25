// Functor(函子)
// 为什么要学函子
// 到目前为止已经学习了函数式编程的一些基础，但是我们还没有演示在函数式编程中如何把副作用控制在可控的范围内、异常处理、异步操作等。

// 什么是Functor
// 容器：包含值和值的变形关系（这个变形关系就是函数）
// 函子：是一个特殊的容器，通过一个普通的对象来实现，该对象具有map方法，map方法可以运行一个函数对值进行处理（变形关系）

// Functor 函子
// class Container {
//   constructor(value) {
//     this._value = value
//   }

//   map(fn) {
//     return new Container(fn(this._value))
//   }
// }

// let r = new Container(5)
//   .map(x => x + 1)
//   .map(x => x * x)

// console.log(r)

class Container {
  static of (value) {
    return new Container(value)
  }

  constructor(value) {
    this._value = value
  }

  map(fn) {
    return Container.of(fn(this._value))
  }
}

let r = Container.of(5)
  .map(x => x + 1)
  .map(x => x * x)

console.log(r)
