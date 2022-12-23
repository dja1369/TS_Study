// any를 사용하는것 보다 제네릭을 사용해 타입 추론을 하도록 하는게 낫다!
type SuperType = <T>(value: T[]) => T;

const anyArr: SuperType = (arr) => arr[0];

const typaA = anyArr([1,2,3,4])
const typeB = anyArr(['1','2','3?'])
const typeC = anyArr([false,1,2,'bool',true])

// 타입을 사용하지 않고 바로 적용해도 된다!
function SuperTypeFunc<V>(value: V[]){
    return value[0]
}

// 제네릭 타입 선언
type Human<E> = {
    name: string
    age: E
}

// 제네릭 타입에 새로운 타입 선언후 추가 <{}>
const duck: Human<{favFood: string}> ={
    name: "duc!",
    age: {
        favFood: "chick!"
    }
}