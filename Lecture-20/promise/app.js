
// let p1 = new Promise()

let p1 = new Promise( function( resolve,reject ){
    let data = '10 rupee ke turtaree';
    let error = 'Chala ja brother';
    
    resolve(data) //.then()
    reject(error)    // .catch()

} )

p1
.then( function(d){
    console.log(d);
} )
.catch( function(e){
    console.log(e);
} )











