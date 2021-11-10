// lodash中的组合函数
// lodash中组合函数flow()或者flowRight()，他们都可以组合多个函数
// flow()是从左到右允许
// flowRight()是从右到左允许，使用的多一些

const _ = require('lodash')

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const f = _.flowRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'tree']))
