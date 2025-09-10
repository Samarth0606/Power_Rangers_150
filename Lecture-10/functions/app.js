

// function abc(){

//     // return 100 // by default undefined
// }
// let x = abc()
// console.log(x);

// ---------------------------------

//parameterised functions
// function sum(a, b, c){ //params
//     console.log(a+b+c);
//     return a+b+c
// }
// let output = sum(10,20,30) //args
// console.log(output);

//default parameterised functions
// function sum(a, b=300, c=400){ //params
//     console.log(c);
//     return a+b+c
// }
// let output = sum(10,20) //args
// console.log(output);

// console.log(NaN);
// console.log(typeof(NaN));

// ------------------------------------

function outer(fn){
    console.log(fn);
    fn()
}

function inner(){
    console.log("hello inner");
}

outer(inner)

