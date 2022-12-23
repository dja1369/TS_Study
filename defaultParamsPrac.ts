// 인자의 디폴트 값 정의
const countDown = (start: number = 1, count: number): void =>{
    while (start !== count){
        console.log(count)
        count--
    }
    console.log(count)
}

countDown(1, 10)

let line = "=".repeat(30)
console.log(line)

function countUp(start: number = 1, count: number) {
    for(start; start <= count; start++){
        console.log(start)
    }
}

countUp(1, 10)

