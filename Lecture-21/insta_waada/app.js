function step1(){
    console.log("please wait selecting image...");
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Selected Image')
        } , 4000)
    })
}

function step2(image){
    console.log(`please wait filter to ${image}...`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Filtered Image')
        } , 2000)
    })
}
function step3(filter){
    console.log(`please wait captioning ${filter}...`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Captioned Image')
        } , 5000)
    })
}
function step4(caption){
    console.log(`please wait uploading ${caption}...`);
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Image Uploaded')
        } , 3000)
    })
}

step1()
.then( function(data){ 
    console.log(data); 
    return step2(data)
} )
.then(function(data){
    console.log(data);
    return step3(data)
})
.then(function(data){
    console.log(data);
    return step4(data)
})
.then(function(data){
    console.log(data);
})











// ------------------------------------------------
// function step1(){
//     console.log("please wait selecting image...");
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve('Selected Image')
//             // reject('chal chal')
//         } , 4000)
//     })
// }

// let p1 = step1()
// p1
// .then(function(data){ console.log(data); })
// // .catch(function(err){ console.log(err); })
// // .finally(function(){console.log("ye tune kya kia");})












