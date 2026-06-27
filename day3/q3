//Promise

function payment(status){
    return  new Promise((resolve, reject) => {
        if(status){
           resolve("payment sucessfull");
        }
        else{
            reject("payment reject..")
        }
    });

}
payment(false).then((a)=>{
    console.log(a);
})
.catch((err)=>{
    console.log(err);
})