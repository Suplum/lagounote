// 不会等待这个任务的结束才开始下一个任务
// 对于耗时操作，都是开启过后就立即往后执行下一个任务，后续逻辑一般会通过回调函数的方式来定义
// 难点：代码的执行顺序混乱

console.log('global begin')

setTimeout(function timer1() {
  console.log('timer1 invoke')
}, 1800)

setTimeout(function timer2() {
  console.log('timer2 invoke')

  setTimeout(function inner() {
    console.log('inner invoke')
  }, 1000)
}, 1000)

console.log('global end')

// 运行环境的API是以同步或异步模式的方式工作
// 异步：下达指令后往下走
