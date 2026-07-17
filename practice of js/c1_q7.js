const person =[
    {
        name:"raj",
        salary:2000
    },
    {
        name:"jack",
        salary:4000
    },
    {
        name:"jon",
        salary:3400
    }
]


const a= person.filter((num)=>{
    return num.salary>3400;
})
console.log(a);
