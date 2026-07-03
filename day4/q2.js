"use strict";
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class School {
    static totalStudent = 0;
    studentList = [];
    addStudent(student) {
        this.studentList.push(student);
        School.totalStudent++;
    }
    static totalCount() {
        return School.totalStudent;
    }
}
const s = new Student(1, "tom");
// const sc =new Student();
// sc.addStudent(s);
console.log(School.totalCount());
