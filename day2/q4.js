const arr =[2,3,4,5,6]
const filterEvenNumber =(num)=>{
   return arr.filter((arr)=>{
        return   arr%2==0
   })
}
console.log(filterEvenNumber(arr));