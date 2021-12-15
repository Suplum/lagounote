// Task异步执行
// folktale(2.3.2)2.x中的Task和1.0中的Task区别很大，1.0中的用法更接近我们现在演示的函子
// 这里以2.3.2来演示

const fs = require('fs')
const {
  task
} = require('folktale/concurrency/task')
const {
  split,
  find
} = require('lodash/fp')

function readFile(filename) {
  return task(resolver => {
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        resolver.reject(err)
      }
      resolver.resolve(data)
    })
  })
}

readFile('package.json')
  .map(split('\n'))
  .map(find(x => x.includes('version')))
  .run()
  .listen({
    onRejected: err => {
      console.log(err)
    },
    onResolved: value => {
      console.log(value)
    }
  })
