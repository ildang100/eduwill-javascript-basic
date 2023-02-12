// try ~ catch ~ finally

try {
    // throw '고의적 에러 발생'
    console.log('try 중')
} catch (error) {
    console.log('error : ', error)
} finally {
    console.log('finally')
}