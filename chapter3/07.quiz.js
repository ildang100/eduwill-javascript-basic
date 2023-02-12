// 1. 구구단을 출력해보세요. 2단 ~ 9단까지
// 2 * 1 = 2
// ...
// 9 * 9 = 81

// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//         console.log(i + ' * ' + j + ' = ' + i * j)
//     }
// }

// 2. 다음과 같이 출력해보세요.
/* 

*
**
***
****
*****

*/

// for (let i = 1; i <= 5; i++) {
//     let str = ''
//     for (let j = 1; j <= i; j++) {
//         str += '*'
//     }
//     console.log(str)
// }

// 3. 다음과 같이 출력해보세요.

/* 

*****
****
***
**
*

*/

for (let i = 1; i <= 5; i++) {
    let str = ''
    for (let j = 0; j <= 5 - i; j++) {
        str += '*'
    }
    console.log(str)
}