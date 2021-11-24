// lodash/fp
// lodash的fp模块提供了实用的对函数式编程友好的方法
// 提供了不可变的auto-curried itetatee-first data-last 的方法

const _ = require('lodash')

// 数据优先、函数滞后
_.map(['a', 'b', 'c'], _.toUpper)

_.map(['a', 'b', 'c'])

_.split('Hello World', ' ')

// 函数优先、数据滞后
const fp = require('lodash/fp')
fp.map(fp.toUpper, ['a', 'b', 'c'])
fp.map(fp.toUpper)(['a', 'b', 'c'])

fp.split(' ', 'Hello World')
fp.split(' ')('Hello World')

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY DIE'))
