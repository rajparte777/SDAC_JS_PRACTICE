const arr =[23,44,78,45,90,37,74]
function filterPassStudent(){
    return arr.filter((marks)=>{
        return marks >35

    })
}
console.log(filterPassStudent());