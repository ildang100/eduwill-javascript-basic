// break 해당 블록의 실행을 멈추고, 밖으로 나간다.
// for (let i = 1; i < 7; i++) {
//     if (i % 3 === 0) {
//         break
//     }
//     console.log('i : ' + i)
// }

// console.log('종료')

// continue
for (let i = 1; i < 7; i++) {
    if (i % 3 === 0) {
        continue
    }
    console.log('i : ' + i)
}