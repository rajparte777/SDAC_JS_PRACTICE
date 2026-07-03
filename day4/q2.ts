class Student{
    id:number;
    name:String;

    constructor(id:number,name:String){
        this.id =id;
        this.name=name;
    }
}
class School{
    static totalStudent:any =0;
    studentList:Student[]=[]
    addStudent(student:Student):void{
        this.studentList.push(student)
        School.totalStudent++
    }
 
    static totalCount():Number{
        return School.totalStudent
    }
}
const s= new Student(1,"tom");
// const sc =new Student();

// sc.addStudent(s);
console.log(School.totalCount());