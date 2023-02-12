// 다음 요구조건을 만족하도록 작성하시오.
// 1. 함수명 : getSum 혹은 더 좋은 네이밍이 있다면 사용 가능
// 2. 파라미터 : 1개 / 파라미터명 -> number
// 3. 기능 : 1부터 number까지의 합의 결과를 리턴 한다.
// ex) 함수명(10) -> 55

function getSum(number) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}

console.log(getSum(10))