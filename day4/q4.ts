abstract class Person{
    abstract getDetail():void
    abstract getRole():String

}

class Students extends Person{
    name:string ="tom"
    getDetail(): void {
        console.log(this.name);
    }
    getRole(): String {
        return "Students"
    }

}
const a= new Students();
a.getDetail()
console.log(a.getRole());