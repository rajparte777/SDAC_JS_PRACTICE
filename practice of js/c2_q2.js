class Emp{
    name="raj";
    salary=200;
    id=2;

    displayinfo(){
            console.log(this.name + "     " + this.salary + "   " +this.id);
    }
    
}
const a=new Emp()
a.displayinfo()