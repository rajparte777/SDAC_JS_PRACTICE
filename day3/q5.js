//default and rest parameter



//default
function x(a,b=10){
    console.log(a+b);
}
(20,30)

//rest parameter
const arr=[2,3,4,5,6]

function add(){
    return Math.max(...arr)


}
console.log(add());