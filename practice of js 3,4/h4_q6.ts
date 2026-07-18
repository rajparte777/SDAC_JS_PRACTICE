function getStudentInfo<T>(a:T){
    return a;
}
console.log(getStudentInfo<number>(10));
console.log(getStudentInfo<String>("raj"));