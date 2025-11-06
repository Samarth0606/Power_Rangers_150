
// how it is called

//  1. direct calling -> window 
// function samarth(){
//     console.log(this);
// }
// samarth()

// 2. object calling=>obj inside which that method is avai.
// let obj = {
//     a: 30,
//     fn: function(){
//         console.log(this.a);
//     }
// }
// obj.fn()

// ------------------------------


// let obj = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // obj
//         function sam(){
//             console.log(this , "2");
//         }
//         sam(); // window
//     }
// }
// obj.fn()


// let obj2 = {
//     a: 10,
//     fn: function(){
//         console.log(this , "1"); // window
//         function sam(){
//             console.log(this , "2");
//         }
//         sam(); // window
//     }
// }
// let fun = obj2.fn
// fun()

// ------------------------------


// let obj = {
//     fn: function(){
//         console.log(this , "1");//obj
//         function vohra(){
//             console.log(this , "2");//window
//             let pobj = {
//                 z:100,
//                 fun: function(){
//                     console.log(this , "3");// pobj
//                 }
//             }a
//             pobj.fun()
//         }
//         vohra()
//     }
// }
// obj.fn()


// ------------------------------

// 3. constructor calling => newly created object
// function Sam(){
//     this.company = "Pata nhi";
//     this.package = "bohat sara";
// }

// let o1 = new Sam();
// let o2 = new Sam();

// ------------------------------
// 4. indirect calling => change the ref of this keyword
// => call, apply, bind

let obj = {
    a: 10,
    fn: function(x,y){ console.log(this.a,x,y); }
}

let obj2 = {
    a: 50
}

// obj.fn(10,20)
obj.fn.call(obj2,200,300)
obj.fn.apply(obj2,[500,600])
let newFn = obj.fn.bind(obj2,200,300) //copy bnanata hai
newFn()














// ------------------------------
// 5. arrow fn

// let obj = {
//     a: 10,
//     fn: ()=>{
//         console.log(this , "1");
//         let fun = ()=>{
//             console.log(this , "2");
//         }
//         fun();
//     }
// }
// let baba = obj.fn

// baba()



// function sqr(n){
//     console.log(n*n);
// }
// way-1
// let sqr = (n)=>{
//     console.log(n*n);
// }

// // way-2
// let sqr2 = (n)=> n*n

// // way-3
// let sqr3 = n => n*n

// console.log( sqr(6) );

