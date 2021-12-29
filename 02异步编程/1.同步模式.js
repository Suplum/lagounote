// 同步：不是同时执行，而是排队执行

console.log('global begin')

function bar() {
  console.log('bar task')
}

function foo() {
  console.log('foo task')
  bar()
}

foo()

console.log('global end')
