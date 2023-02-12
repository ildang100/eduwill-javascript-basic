// 1. 다음과 같이 출력해보세요. break 또는 continue 를 써보세요.
/* 

*
**
***
****
*****

*/

// for (let i = 1; i <= 5; i++) {
//     let str = ''
//     for (let j = 1; j <= 5; j++) {
//         if (j > i) {
//             break
//         }
//         str += '*'
//     }
//     console.log(str)
// }

// 2. 다음과 같이 출력해보세요.break 또는 continue 를 써보세요.

/* 

*****
****
***
**
*

*/
for (let i = 1; i <= 5; i++) {
    let str = ''
    for (let j = 1; j <= 5; j++) {
        if (6 - i < j) {
            continue
        }
        str += '*'
    }
    console.log(str)
}