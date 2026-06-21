const emp=[
    {
        "name":"raj",
        "salary":20000
    },
       {
        "name":"roy",
        "salary":20300
    },
       {
        "name":"joy",
        "salary":11000
    }
]

const a =emp.filter((num)=>{
    return num.salary >11000
})
console.log(a);