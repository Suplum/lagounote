// Math.pow(4, 2)
// Math.pow(5, 2)
function makePower(power) {
  return function (number) {
    return Math.pow(number, power)
  }
}

// 求平方
let power2 = makePower(2)
let power3 = makePower(3)
console.log(power2(4))
console.log(power2(5))
console.log(power3(4))
