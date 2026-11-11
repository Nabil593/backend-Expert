// var a = 10;
// var a = 20;
// console.log(a)


//! SyntaxError: Identifier 'a' has already been declared
// let a = 10;
// let a = 20;
// console.log(a)



//* IIFE

// create block scope with IIFE
(() => {
    let a = 10;
    console.log(a);
})();

(() => {
    let a = 100;
    console.log(a);
})()