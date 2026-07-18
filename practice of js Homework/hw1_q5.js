const arr=[23,56,37,98,69,40]

const  grade =arr.map((num)=>{
    if(num>=90){
       return "A"
    }
    else if(num>=70){
       return "B"
    }
    else if(num>=40){
       return "C"
    }
    else if(num<40){
      return
    }
    else{
        return "F"
    }
})
console.log(grade);

//filter

const marks =arr.filter((num)=>{
    return num>75
})
console.log(marks);

//reduce
const total =arr.reduce((num,total)=>{
    return total=total + num
})
console.log(total);