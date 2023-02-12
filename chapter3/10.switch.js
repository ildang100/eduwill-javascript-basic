// switch (state) {}

/*
switch(state) {
	case 표현식 : 문장
	case 표현식 : 문장
	default : 문장
}
*/

const date = 3
switch (date) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
    default:
        console.log('오류 입니다.')
}