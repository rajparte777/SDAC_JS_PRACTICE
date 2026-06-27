
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
async function test() {

    try{
        const a = await payment(true)
        console.log(a);
        
    }
    catch(error){
        console.log(error);
    }
    
}
test()