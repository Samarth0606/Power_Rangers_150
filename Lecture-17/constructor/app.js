function Kuchbhi(naam,umar){
    this.name = naam;
    this.age = umar;
    // this.icard =  function(){
    //     console.log("hello gla");
    // }
}

Kuchbhi.prototype.icard =  function(){
    console.log("hello gla");
}
let obj = {a:10}
let o1 = new Kuchbhi("Sam" , 99 ); 
let o2 = new Kuchbhi("Mav" , 3); 
let o3 = new Kuchbhi("Kash" , 30); 
console.log(o1);
console.log(o2);
console.log(o3);