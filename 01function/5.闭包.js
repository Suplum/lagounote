// 闭包(Closure)：函数和其周围的状态（词法环境）的引用捆绑在一起形成闭包。
// 可以在另一个作用于中调用一个函数的内部函数并访问到该函数的作用于中的成员。

// 高阶函数-函数作为返回值
function makeFn() {
  let msg = 'Hello function';
  return function () {
    console.log(msg);
  }
}

// const fn = makeFn()
// fn()

// makeFn()()

// once
function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function (money) {
  console.log(`支付：${money}RMB`)
})
pay(5)
pay(5)
pay(5)
pay(5)


// 闭包的本质：函数在执行的时候会放到一个执行栈上当函数执行完毕之后会从执行栈上移除，
// 但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问外部函数的成员

// 好处：延长了内部变量的作用范围

// 注意点[http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html]：
// 1. 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。
// 解决方法是，在退出函数之前，将不适用的局部变量全部删除。
// 2. 闭包会在父函数外部，改变父函数内部变量的值。
// 所以，如果你把父函数当做对象使用，把闭包当做它的公用方法，把内部变量当做它的私有属性，这时一定要小心，不要随便改变父函数内部变量的值。

// 优缺点：[https://www.cnblogs.com/sandaizi/p/11582488.html]
