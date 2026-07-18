"use strict";
class Studentt {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
class School {
    static totalStudent = 0;
    studentList;
    Student;
    addStudent(Studentt) {
        this.studentList.push(Studentt);
        School.totalStudent++;
    }
    static totalCount() {
        return School.totalStudent;
    }
}
const S = new Studentt(1, "raj");
console.log(s);
