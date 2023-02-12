// if 조건문
// 프로그래밍에서 가장 중요한 2가지 중 1가지

// if(표현식) 을 먼저 평가 후, 평가 결과를 true/false 둘중 하나 값으로 반환 한다.
// true 일 경우, {} 블록 내부를 실행한다.
let test = true

if (test) {
    console.log('조건문이 만족 합니다.')
}

let score = 90

if (score > 90) {
    // false
    console.log('A학점 입니다.')
} else if (score > 80) {
    // true
    console.log('B학점 입니다.')
} else if (score > 70) {
    console.log('C학점 입니다.')
} else {
    console.log('D학점 입니다.')
}