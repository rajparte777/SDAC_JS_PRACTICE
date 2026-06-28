class Emp{
    name:String ="raj"
    salary:number =2000

    displayInfo():void{
        console.log(this.name + " - " +this.salary);
    }
}
const a = new Emp()
a.displayInfo;
console.log(a.name);