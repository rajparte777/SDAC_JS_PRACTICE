//default parameter

function add(a,b=10){
    return a+b;
}
console.log(add(1));

//rest parameter

const arr=[1,2,3,4,5,4]
function find(){
  return Math.max(...arr)
}
console.log(find());