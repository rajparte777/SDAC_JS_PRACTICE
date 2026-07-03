"use strict";
class Studentt {
    markAttendence(isPresent) {
        if (isPresent) {
            console.log("student present");
        }
        else {
            console.log("absebt");
        }
    }
}
const ss = new Studentt();
ss.markAttendence(true);
