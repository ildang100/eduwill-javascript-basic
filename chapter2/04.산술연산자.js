//
let price = 100

// console.log(price + undefined)
// console.log(price + null)

// let test

// console.log(price + (test | 0)) // test가 undefined or null or false 0

let test = price + '가'
console.log('file: 04.산술연산자.js:12 ~ test', test)
console.log(typeof test)

let test1 = 200
let test2 = '나'

console.log(test1 + test2)

console.log(`${test1}${test2}`)