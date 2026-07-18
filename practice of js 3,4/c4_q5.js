"use strict";
class Student {
    markAttendance(isPresent) {
        if (isPresent) {
            console.log("attendence is marked");
        }
        else {
            console.log("student appesent");
        }
    }
}
const s = new Student();
s.markAttendance(true);
