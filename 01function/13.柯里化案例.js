// 柯里化案例
// ''.match(/\s+/g)
// ''.match(/\d+/g)

function match(reg, str) {
  return str.match(reg)
}
