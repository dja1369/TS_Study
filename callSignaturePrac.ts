type Data = {
    id: string
    length: number
}

const data: Data = {
    id: "test",
    length: 4
}

console.log(data)

// 오버 로딩
type VarData = {
    (id: string | number, length: number): void;
    (id: string, length: number, auth: boolean): void;
}

// auth 인자가 옵션 일떄는 인자명 뒤에 ? 를 붙힌후 타입을 명시한다
const varData: VarData = (id, length, auth?:boolean) =>{
    // 만약 auth인자가 존재한다면
    if(auth){
        console.log("WoW args is 3!!!")
    }
    else if (typeof id ==="number"){
        console.log("args is 2")
    }
}

console.log(varData(1, 100))
console.log(varData("1", 100, true))

// 제네릭은 타입을 유추하여 다양한 값을 받을수 있게 해준다
// 제네릭으로 함수의 인자를 옵션을 부여하고자 하며 타입을 지정할때는 타입과 함수 둘다 모두 ?구문을 붙여야 작동
type GenericPrac = {
    <T>(id: T, length: T, auth?: string): void;
}

const genericData: GenericPrac = (id, length, auth?: string) => {
    if(auth){
        console.log("auth 존재!")
    }
    else{
        console.log("auth 어따 팔아먹었니?")
    }함
}

console.log(genericData(1, 100, "none"))
console.log(genericData(1, 100))