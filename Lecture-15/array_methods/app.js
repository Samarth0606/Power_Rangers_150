
// let arr = [10,20,30,40,50];

// forEach()

// let newArr = arr.forEach( function(item,index){
//     console.log(item+index);
//     // return item+index; //not possible
// } )

// console.log(newArr);

// map()

// let newArr = arr.map( function(item,index){
//     // console.log(item*item)
//     return item*item
// } )

// console.log(arr);
// console.log(newArr);


// filter()

// let newFilteredArr = arr.filter( function(item,index){
//     if(item%20==0){
//         return true
//     }
// } )

// console.log(arr);
// console.log(newFilteredArr);


// let arr = [3,10,20,22,30,32,50];

// let out = arr.some( function(item,index){
//     console.log("mai chal padha");
//     if(item%10 == 0){
//         return true
//     }
// } )

// console.log(out);

// let out1 = arr.every( function(item,index){
//     console.log("mai chala");
//     if(item%2 == 0){
//         return true
//     }
// } )
// console.log(out1);

// -------------------------------------

// let arr = [10,20,30,5,6,7]

// let a1 = arr.map( function(item,index){
//     return item*2
// } )

let a2 = a1.filter( function(item,index){
    if(item>30){ return true}
} )
console.log(a2);

// -------------------------------------

let arr = [10,20,30,5,6,7]

let out = arr.map( function(item){
    return item*2
} ).filter( function(item){
    if(item>30){ return true}
} )
console.log(out);