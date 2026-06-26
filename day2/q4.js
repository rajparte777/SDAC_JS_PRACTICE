// const arr =[2,3,4,5,6]
// const filterEvenNumber =(num)=>{
//    return arr.filter((arr)=>{
//         return   arr%2==0
//    })
// }
// console.log(filterEvenNumber(arr));

const num =[1,2,3,4,5,6,7]

function filterEvenNumber(a){
    return a%2==0;
}
const x= num.filter(filterEvenNumber)
console.log(x);