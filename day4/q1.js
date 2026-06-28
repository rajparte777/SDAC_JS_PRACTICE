"use strict";
class Emp {
    name = "raj";
    salary = 2000;
    displayInfo() {
        console.log(this.name + " - " + this.salary);
    }
}
const a = new Emp();
console.log(a.displayInfo);
