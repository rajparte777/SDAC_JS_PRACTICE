function getStudent<T>(a:T){
return a;
}
console.log(getStudent<number>(10));
console.log(getStudent<String>("tom"));