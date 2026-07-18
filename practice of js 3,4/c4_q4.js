"use strict";
class Person {
}
class Student extends Person {
    name = "tom";
    getDetail() {
        console.log(this.name);
    }
    getROle() {
        return "student";
    }
}
const s = new Student();
s.getDetail();
