// for Loop 안에, for Loop 존재
for (let i = 0; i < 5; i++) {
    console.log('처음 반복문: ' + i)
    for (let j = 0; j < 3; j++) {
        console.log('두번쨰 반복문: ' + j)
    }
}