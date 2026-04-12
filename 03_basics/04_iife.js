// immediately invoked function expressions
// jaise hi function likha turant execute karvana hai 
// file hai toh uske saath instantly database connection establish ho jaye
// function may pollute global vars to avoid it we may use iife

// (function chai(){
//     console.log(`db connceted`)
// })() //iife
// (function aurcode(){
//     console.log(`db connceted 2`)
// })() //iife
// in iife we know dont know where context ends unless you specify it with semicolon, eg back to back iifes wont execute
(function chai(){ // named iife
    console.log(`db connceted`)
})(); //iife
(function aurcode(){
    console.log(`db connceted 2`)
})() ;
((name)=>{ //simple iife
    console.log(`db connceted 3 ${name}`)
})('hitesh') 
