
// function sam(){

// }

// let a = sam()
// console.log(a);

// ------------------

// function sam(){

// }

// let a = sam()
// let b = new sam()
// console.log(a);
// console.log(b);


// ------------------

// function sam(a,b,c,d){
//     this.naam = a;
//     this.umar = b;
//     this.pasandeedaRang = c;
//     this.kyaShikshakHai = d;
// }

// let a = new sam("Sam", 99, "Blue" , true)
// let b = new sam("Mav", 3, "Brown" , false)
// let c = new sam("Monu", 16, "Pink" , true)

// console.log(a);
// console.log(b);
// console.log(c);

// ------------------

function gla(x,y,z,aa){
    this.canteen = x;
    this.student = y;
    this.fees = z;
    this.isPlacement = aa;
    // this.party = function(){
    //     console.log("special dandiya");
    // }
}

gla.prototype.party = function(){
    console.log("special dandiya");
}

let a = new gla(4,24000,300000,false)
let b = new gla(1,150,500,true)
console.log(a);
console.log(b);


