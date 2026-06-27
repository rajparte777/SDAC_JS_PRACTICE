class Emp{
     name="raj";
     id =1;
     salary = 2000;

     displayInfo(){
        console.log("name : " +this.name + " salary :", +this.salary);
     }
}

const a= new Emp();
console.log(a.name);
a.displayInfo();
