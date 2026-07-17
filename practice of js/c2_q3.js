//try catch
function name(status){
    return new Promise((resolve, reject) => {
       if(status){
        console.log("resolve");
       }
       else{
        console.log("reject");
       }
   });
}
name(false).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

//async await

function name(status){
    return new Promise((resolve, reject) => {
       if(status){
        console.log("resolve");
       }
       else{
        console.log("reject");
       }
   });
}
async function test() {

    try {
        const a = await name(true)
        console.log(a);
        
    } catch (error) {
        console.log(error);
    }
    
}
test()