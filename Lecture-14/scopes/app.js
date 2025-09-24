

// var a = 10;
// console.log(a);


// --------------------------

// console.log(a); //hoisting
// var a = 10;

// --------------------------

// sam()
// function sam(){
//     var a = 1;
//     console.log(a);
// }

// --------------------------


// sam()
// function sam(){
//     console.log(a);
//     var a = 1;
// }

// --------------------------

// var a = 10;
// let b = 100;
// const c = 1000;

// console.log(a);
// console.log(b);
// console.log(c);
// --------------------------

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 100;
// const c = 1000;

// --------------------------

// var a = 10;
// let b = 20;

// function abc(){
//     var c = 100;
//     let d = 200;
//     console.log(c);
//     console.log(d);
// }
// abc()
// console.log(a);
// console.log(b);

// --------------------------
// var a = 10;
// let b = 20;

// function abc(){
//     var c = 100;
//     let d = 200;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }
// abc()
// console.log(a);
// console.log(b);

// --------------------------

// var a = 1;    //global
// let b = 2;    // script
// const c = 3;  // script

// if(true){
//     var d = 10;   // global
//     let e = 20;   // block
//     const f = 30; // block
// }

// function sam(){
//     var g = 100;    // functional
//     let h = 200;    // block
//     const i = 300;  // block
// }
// sam()

// --------------------------

// var a = 10; // global
// let b = 20; // script

// function vohra(){
//     var a = 100;  // functional
//     let b = 200;  // block
//     console.log(a);
//     console.log(b);
// }
// vohra()
// console.log(a);
// console.log(b);

// -------------------------------


// var a = 10; // global
// let b = 20; // script

// if(true){
//     var a = 100;  // global
//     let b = 200;  // block
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// -------------------------------

var a = 10;   // global
const b = 20; // script

if(true){
    var a = 100;  // global
    let b = 200;  // block
    const c = 300 // block
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);