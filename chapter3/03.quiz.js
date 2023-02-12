// 1. while 문을 사용해, 1부터 30까지 값을 출력해보시오.
// 초기 변수값이 필요하다
// 초기 변수 값이 31보다 작다면, 변수값을 출력한다.
// 출력한뒤에, 1씩 증가 시킨다.

// count 라는 변수를 생성한다, 초기값은 1
// while 문을 통해 반복한다.(count < 31)
// while 문 {} 블록에서 count 를 출력하고, 1씩 증가 시킨다.
// let count = 1
// while (count < 31) {
//     console.log('count: ', count)
//     count += 1
// }

// 2. while 문을 사용해, 1~30 중, 홀수만 출력해보시오.
// count 변수 초기값 1을 생성해준다.
// // while 문을 통해 반복한다.(count < 31)
// count 가 홀수일 때만, 출력한다.
// 출력수 count 를 증가시킨다.
let count = 1
while (count < 31) {
    if (count % 2 === 1) {
        console.log('count = ' + count)
    }
    count += 1
}