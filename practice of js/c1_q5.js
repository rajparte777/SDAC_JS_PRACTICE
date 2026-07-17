
//map
const a =[1,2,3,4,5,6,7,8,9]

const x= a.map((num)=>{
    return num* num;

})
console.log(x);
//filter

const f = a.filter((num)=>{
    return num%2 ==0;

})
console.log(f);

//reduce
let total =0;
const r =a.reduce((num,total)=>{
    return total = total + num;
})
console.log(r);