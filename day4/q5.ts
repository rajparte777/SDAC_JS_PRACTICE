interface  Attendence{
    markAttendence(isPresent : boolean):void

}
class Studentt implements Attendence{
    markAttendence(isPresent: boolean): void {
        if(isPresent){
            console.log("student present");
        }
        else{
            console.log("absebt");
        }
    }
}
const ss= new Studentt()
ss.markAttendence(true)