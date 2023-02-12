//  while (true) {
// 표현식의 결과가 false 일 떄 까지, 반복 진행
// 반복되는 조건이 필요하며, 없을 경우 무한히 돈다. => 무한루프 라고 표현

// let count = 0

// while (count < 10) {
//     console.log('현재 count: ' + count)
//     count += 1
// }

// 우선 do 문 실행
// while 평가 true 이면, do 실행
// while 평가 false 이면, while {} 블록 실행 후 종료

let count2 = 0

do {
    console.log('do count2: ' + count2)
    count2 += 1
} while (count2 < 10) {
    console.log('while count2: ' + count2)
    count2 += 2
}