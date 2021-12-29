// 可以理解为一件你想要做的事情
// 由调用者定义，交给执行者执行的函数
function foo(callback) {
  setTimeout(function () {
    callback()
  }, 3000)
}

foo(function () {
  console.log('这就是一个回调函数')
  console.log('调用者定义这个函数，执行者执行这个函数')
  console.log('其实就是调用者告诉执行者异步任务结束后应该做什么')
})
