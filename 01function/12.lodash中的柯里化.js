// _.curry(func)
// 功能：创建一个函数，该函数接收一个或多个func的参数，如果func所需要的参数都被提供则执行func并返回执行的结果。否则继续返回该函数并等待接收剩余的参数
// 参数：需要柯里化的函数
// 返回值：柯里化后的函数

// lodash中的curry的基本使用
const _ = require('lodash')

function getSum(a, b, c) {
  return a + b + c
}

const curried = _.curry(getSum)
console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))
