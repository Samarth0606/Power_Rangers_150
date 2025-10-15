

// 1. A is HOF,  B is callback fn
function a( fn ){
    console.log("HI i am A");
}
function b(){
    console.log("HI i am B");
}

a( b )
// ---------------------------------

// 2. outer is HOF
function outer(){
    console.log("Hey i am outer");
    function inner(){
        console.log("i am INNER");
    }
    return inner;
}
outer()