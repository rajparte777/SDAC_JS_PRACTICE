abstract class Person{
    abstract getDetail():void
    abstract getROle():String

}

class Student extends Person{
      name:string="tom"
      getDetail(): void {
          console.log(this.name);
      }
      getROle(): String {
          return "student"
      }
}
const s= new Student()
s.getDetail()