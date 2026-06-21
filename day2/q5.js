const arr =[2,3,4,5,6]
 const a = arr.map((num)=>{
         return num *num
 })
 console.log(a);

//filter

 const b = arr.filter((num)=>{
    return num%2!=0
 })
 console.log(b);

//reduce
 const c = arr.reduce((total,num)=>{
  return total = total +num
    
 })

console.log(c);