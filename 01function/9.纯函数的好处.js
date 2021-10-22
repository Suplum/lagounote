// 纯函数的好处
// 可缓存
// 因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来

// 记忆函数
const _ = require('lodash')

function getArea(r) {
  console.log(r)
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

// 模拟memoize方法的实现
function memoize(f) {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || f.apply(f, arguments)
    return cache[key]
  }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))


// 可测试
// 纯函数让测试更方便
// 并行处理
// 在多线程环境下并行操作共享的内存数据很可能会出现意外情况
// 纯函数不需要访问共享的内存数据，所以在并行环境下可以任意运行纯函数（Web Woker）
