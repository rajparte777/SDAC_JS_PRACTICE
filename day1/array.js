//map,filter,reduce


//map
const a=[1,2,3,4,5,6,7]

const b =a.map((num)=>{
   return num +2
})
console.log(b);

//filter

const x =a.filter((num)=>{
    return num %2===0

})
console.log(x);

//reduce
const y = a.reduce((tot,a)=>{
        return tot =tot + a;
})
console.log(y);