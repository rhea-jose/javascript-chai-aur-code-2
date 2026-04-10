let score = 33;
console.log(score);
console.log(typeof score);

//let {score} = req.body you wont know what score datatype is use typeof when data is coming to frontend from somewhere
let score2="33";
console.log(score2);
console.log(typeof score2);

let score3="33";
let newScore=Number(score3);
console.log(newScore);
console.log(typeof newScore);

let score4="33abc";
let newSore=Number(score4);
console.log(newSore);
console.log(typeof newSore);

// null->Number 0
// undefined->number NaN
// true 1 false 0
// string -> NaN
// TYPE OF NAN IS NUMBER!!

// "" -> false "bfkev" -> true

let num=10; // true
console.log(Boolean(num));
console.log(String(num));
console.log(typeof String(num));

let val=3
let neg=-val
console.log(2**3);
console.log(2/3); // float not int
// not double divide it makes a comment console.log(2//3);

// concat strs by s1+s2

// Below : ambiguous changes like these may happen due to ecma so refer to them if confusion occurs
// preferred not to write such code
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

let num1,num2,num3;
num1=num2=num3=10
//allowed not prefer

