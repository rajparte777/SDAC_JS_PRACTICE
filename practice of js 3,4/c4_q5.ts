interface Attendance{
    markAttendance(isPresent:String):void;
}
class Student implements Attendance{
    markAttendance(isPresent: String): void {
        if (isPresent) {
            console.log("attendence is marked");
            
        } else {
            console.log("student appesent");
        }
    }
}

const s= new Student()
s.markAttendance(true)
