// 纯函数概念
// 纯函数：相同的输入永远会得到相同的输出，而且没有任何可观察到的副作用
// 纯函数就类似数学中的函数（用来描述输入和输出之间的关系）
// lodash是一个纯函数的功能库，提供了对数组、对象、字符传、函数等操作的一些方法
// 数组的slice和splice分别是：纯函数和不纯的函数
// slice返回数组中的指定部分，不会改变原函数
// splice对数组进行操作返回该数组，会改变原数组

// 纯函数和不纯的函数
// slice / splice
let array = [1, 2, 3, 4, 5]
// 纯函数
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))
console.log(array.slice(0, 3))
// 不纯的函数
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
console.log(array.splice(0, 3))
// 纯函数
function getSum(n1, n2) {
  return n1 + n2
}
console.log(getSum(1, 2))
console.log(getSum(1, 2))
console.log(getSum(1, 2))

// 函数式编程不会保留计算中间的结果，所以变量是不可变的（无状态的）
// 我们可以把一个函数的执行结果交给另一个函数去处理
