
// function sam(){}

// console.log( sam() );

// ----------------------------------

// function sam(){}

// console.log( new sam() );

// ----------------------------------

// async function sam(){
//     return new Promise((resolve,reject)=>{resolve("hi")})
// }

// console.log( sam() );



// async function sam1(){
//     console.log(10);
//     console.log(20);
//     let resp = await fetch('https://jsonplaceholder.typicode.com/todos')
//     let data = await resp.json()
//     console.log(data);
//     console.log(30);
// }


// sam1()
// console.log("tata");
// console.log("bye bye");




async function sam1(){
    console.log(10);
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await resp.json()
    console.log(data,'1');
    console.log(30);
}
async function sam2(){
    console.log(100);
    let resp = await fetch('https://jsonplaceholder.typicode.com/todos')
    let data = await resp.json()
    console.log(data , "2");
    console.log(300);
}
sam1(); console.log("tata 1");
sam2(); console.log("tata 2");


