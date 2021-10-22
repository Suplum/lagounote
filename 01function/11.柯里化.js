// 柯里化
// function checkAge(age) {
//   let min = 18
//   return age >= min
// }


// 普通纯函数
// function checkAge(min, age) {
//   return age >= min
// }

// console.log(checkAge(18, 20))
// console.log(checkAge(22, 24))

// 函数的柯里化
// function checkAge(min) {
//   return function (age) {
//     return age >= min
//   }
// }

let checkAge = min => (age => age >= min)

let checkAge18 = checkAge(18)
let checkAge20 = checkAge(20)

console.log(checkAge18(20))
console.log(checkAge20(24))


// 柯里化
// 当一个函数有多个参数的时候先传递一部分参数调用它（这部分参数以后永远不变）
// 然后返回一个新的函数接收剩余的参数，返回结果
