function step1( fn ){
    console.log("please eait i am selecting image...");
    setTimeout(function(){
        console.log("Selected Image");
        fn("Selected Image")
    }, 4000)
}

function step2(image, fn){
    console.log(`please wait applying filter to ${image}`);
    setTimeout(function(){
        console.log("Filtered Image");
        fn("Filtered Image")
    }, 2000)
}

function step3(filter, fn){
    console.log(`please wait adding caption to the ${filter}`);
    setTimeout(function(){
        console.log("Caption Added");
        fn("Captioned Image")
    } , 5000)
}

function step4(caption){
    console.log(`please wait uploading ${caption}`);
    setTimeout(function(){
        console.log("Image uploaded Successfullyyyyy.....");
    } , 3000)
}

step1( function(image){
    step2(image , function(filter){
        step3(filter, function(caption){
            step4(caption)
        })
    } )
} )