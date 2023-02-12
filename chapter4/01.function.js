// Function

console.log(add(1, 2))
try {
    console.log(multiply(1, 2)) // undefined
} catch (error) {
    console.log(error)
        // console.log(multiply)
}

// 선언식
function add(a, b) {
    return a + b
}

// 표현식
let multiply = function(a, b) {
    return a * b
}

// let multiply = 1

console.log(multiply(1, 2)) // undefined

// var
// let 과 const 99.9%
// const 사용률이, 95% 이상입니다.

// 네이밍은 동사+명사
// 시멘틱하게 지으며, 함수와 파라미터를 보고, 기능을 알 수 있도록(유추) 작성하는게 좋음.
// camelCase
/**
 * value 값을 반환한다.
 */
function getValue() {
    return this._value
}

/**
 * value 값을 설정한다.
 * @param {String} value
 */
function setValue(value) {
    this._value = value
}