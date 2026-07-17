//final block

function test(age) {
    try {
        if(age <18){
            throw new Error("age must be above")
        }
        else{
            console.log("accept");
        }
    } catch (error) {
        console.log(error.message);
    }
  finally {
        console.log("Inside finally");
    }
}

test(22);