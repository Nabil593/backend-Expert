function person() {
    console.log("Rahim")
}

function person() {
    console.log("Karim")
}

person(); 
// output: Karim






//* IIFE

(() => {
    function person() {
    console.log("Rahim")
}
person()
})();


(() => {
    function person() {
    console.log("Karim")
}
person()
})();

// output: 
// Rahim
// Karim