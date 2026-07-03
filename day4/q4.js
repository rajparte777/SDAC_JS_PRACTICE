"use strict";
class Person {
}
class Students extends Person {
    name = "tom";
    getDetail() {
        console.log(this.name);
    }
    getRole() {
        return "Students";
    }
}
const a = new Students();
a.getDetail();
console.log(a.getRole());
