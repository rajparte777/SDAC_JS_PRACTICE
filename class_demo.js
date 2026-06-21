class Emp{
    id;
    name;

    constructor(id,name){
        this.id =id;
        this.name =name;
    }
    displayInfo(){
        console.log(this.id + "" + this.name);
    }
}
const a = new Emp(1,"raj");
a.displayInfo()