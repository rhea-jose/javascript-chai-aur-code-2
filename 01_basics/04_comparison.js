// console.log("2">1);
// console.log("02">1);
// unpredictable not prefer : ensure same datatype avoid ambiguous
// comparisons of null with 0 or null->(some specific rules apply) with undefined->(always false) are ambiguous too, avoid 
// let y; //undefined
// let x=undefined //alspo correct
// console.log("2"==2) // implicit conversions take place
// console.log("2"===2) //datatype as well as value check(no implicit conv) 
// console.log(4===2) 
// console.log(2===2) 

// const id= "123"
// const anotherId="123"
// console.log(id);
// console.log(anotherId);
// console.log(id==anotherId);
// console.log(id===anotherId);

//SYMBOL
// const id= Symbol("123")
// const anotherId=Symbol("123")
// console.log(id);
// console.log(typeof id);
// console.log(anotherId);
// console.log(id==anotherId);
// console.log(id===anotherId);

//OBJECT
let me={
    name:"Rhea JOse",
    age: 19
}

let my=function(){}
console.log(my);
console.log(typeof my); //actually object function 

//saare non primitive datatypes ka type object hota hai deep me even though it doesnt output it as object explicity

// if you use typeof with some name that isnt a varible thats defined or decalred then-> undefined