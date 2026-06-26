
//function with name
function meth(){
    console.log("hello js");
}
meth()

//Anonymous Function
const a =function(){
  console.log("hello unknown");
}
a()

//arrow function

const b = ()=>{
    console.log("hello arrow function");
}
b()

//name function

function meth(){
   let a=10;
   console.log(a);
}
 meth();


 //anonymous function
//1st way
  var b =20;
 const a = function (){
  console.log(b);
    
 }
a()
//2nd way

const q = function (){
    let x = 30;
    console.log(x);
}
q()


//arrow function

const x = ()=>{
    console.log("object");
}
x()
