// 纯函数：对于相同的输入永远会得到相同的输出，而且没有任何可观察到的副作用

// 不纯的
let mini = 18

function checkAge(age) {
  return age >= mini
}

// 纯的（有硬编码，后续可以通过柯里化解决）
function checkAge1(age) {
  let mini = 18
  return age >= mini
}

// 副作用让一个函数变得不纯（如上例），纯函数的根据相同的输入返回相同的输出，如果函数依赖于外部的状态就无法保证输出相同，就会带来副作用。

// 副作用来源：
// 配置文件
// 数据库
// 获取用户的输入

// 所有的外部交互都有可能带来副作用，副作用也使得方法通用性下降不适合扩散和可重用性，同时副作用会给程序中带来安全隐患给程序带来不确定性，但是副作用不能完全禁止，尽可能控制它们在可控范围内发生。
// （跨站脚本攻击）
