function person(age){
  try {
    
    if(age<18){
        throw new Error("Age must be above  or 18")
    }
   
   else{
     console.log("accept");
   }
    

  } catch (error) {
    console.log(error.message);
    
  }   
}
person(22)