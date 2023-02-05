// 숫자 - Number

// 정수 또는 소수를 가진 실수로 나윕니다.
// -1 -100 1 100
// 0.1 0.112

var test1 = 0.1
var test2 = 0.2

var test3 = test1 + test2

console.log(test3.toFixed(1) === 0.3)

// 문자 타입 - String

var test4 = 'hello12312312312한글'

// undefined / null

var test5 = null

var test6

console.log('test5 ', test5)
console.log('test6 ', test6)

// boolean
// true / false

const test7 = true

if (test7) {
    console.log('test7 : 트루', test7)
}

// object - (키 : 벨류)
var object = {
    name: '홍길동',
    age: 30,
}
console.log('file: 05.타입.js:41 ~ object', object)
console.log('object.name : ' + object.name)

// array
console.log(typeof [])
console.log(typeof [] === 'object' && Array.isArray([]))