const promise = new Promise(function (resolve, reject) {
  // 这里用于“兑现”承诺

  // resolve(100)

  reject(new Error('promise rejected'))
})

promise.then(function (value) {
  console.log('resolved', value)
}, function (error) {
  console.log('rejected', error)
})

console.log('end')
