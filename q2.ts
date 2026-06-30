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
    studentList:student[]=[]
}