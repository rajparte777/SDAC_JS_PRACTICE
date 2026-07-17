const sales=[
    {
        product:"laptop0",
        amount : 20000
    },
    {
        product:"Mobile",
        amount : 1000
    },
    {
        product:"watch",
        amount : 46000
    }
]

const x = sales.reduce((total, item) => {
    return total + item.amount;
}, 0);

console.log(x);