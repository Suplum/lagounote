// 总结
// 函数式编程的运算不直接操作值，而是由函子完成
// 函子就是一个实现了map契约的对象
// 我们可以把函子想象成一个盒子，这个盒子里封装了一个值
// 想要处理盒子中的值，我们需要给盒子的map方法传递一个处理值的函数（纯函数），由这个函数来对值进行处理
// 最终map方法返回一个包含新值的盒子（函子）

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

// let r = Container.of(5)
//   .map(x => x + 1)
//   .map(x => x * x)

// console.log(r)

// 演示 null undefined 的问题
Container.of(null)
  .map(x => x.toUpperCase())
