const calculateGrade =(score)=>{
    if (score>=90) {
        return "A"
    } 
    else if (score>=70) {
        return "B"
    } 
    else if (score>=50) {
        return "c"
    } 
    else {
        console.log("enter a valid marks");
    }
}
console.log(calculateGrade(78));