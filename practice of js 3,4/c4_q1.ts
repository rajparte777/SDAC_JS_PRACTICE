class Employ
{
     name:string ="raj"
     salalry:number =2000
     id:any =1
     address:string ="Mumbai"

     displayInfo(){
        console.log(this.name + this.salalry );
     }
}

const a = new Employ()
a.displayInfo()
console.log(a.address);