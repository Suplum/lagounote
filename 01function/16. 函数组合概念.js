// 组合
// 纯函数和柯里化很容易写出洋葱代码 h(g(f(x)))
// 获取数组的最后一个元素再转换成大写字母 _.toUpper(_.first(_reverse(array)))
// 函数组合可以让我们把细粒度的函数重新组合生成一个新的函数

// 管道
// fn = compose(f1,f2,f3)
// b = fn(a)

// 函数组合
// 函数组合（compose）：如果一个函数要经过多个函数处理才能得到最终值，这个时候可以把中间过程的函数合并成一个函数
// 函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果
// 函数组合默认是从右到左执行

// 组合函数
function compose(f, g) {
  return function (value) {
    return f(g(value))
  }
}

function reverse(array) {
  return array.reverse()
}

function first(array) {
  return array[0]
}

const last = compose(first, reverse)

console.log(last([1, 2, 3, 4, 5]))
