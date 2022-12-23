// class를 연습한다
class Player {
    constructor(private fName: string,
                private lName: string,
                public nickName: string){}
}

const human: Player = new Player("doldol", "Lee", "Hommer")

console.log(human)

// 추상 클래스 => 다른 클래스들이 상속이 가능한 클래스 이다
abstract class User{
    constructor(private fName: string,
                private lName: string,
                public nickName: string){}
    getFullNmae(){
        return `hi your name is ${this.fName} ${this.lName}`
    }
}

// 상속받은 클래스는 상속한 클래스의 모든 기능을 사용할수있다
class InheritancePlayer extends User{}

const human2: InheritancePlayer = new InheritancePlayer("billy", "jodan", "Hommer")

console.log(human2)
console.log(human2.getFullNmae())