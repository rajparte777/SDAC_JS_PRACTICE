//exception propagation

function divide(a,b){
    if(b==0){
        throw new Error("cannot divide by zero")
    }
    return a/b
}

function value(){
    return divide(10,0)

}

function main(){
    try{
        const a = value()
        console.log(a);
    }
    catch(error){
        console.log("cauth in main",error.message);
    }
}
main()