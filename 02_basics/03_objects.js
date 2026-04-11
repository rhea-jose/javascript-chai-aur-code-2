// can declare as: literal or constructor
// constructor -> singleton ->one of its kind
// otherwise literals -> multiple instances are created

// Object.create() //constructor
// const mySym=Symbol("key1")
// const myObj={
//     name:"Rhea",
//     age:19,
//     mySym: "key1",
//     "full Name ": "Rhea Jose"
// } //literal

// console.log(myObj.name)
// console.log(myObj["full Name "]) // aise keys ko hum with . nahi access kar payenge
// console.log(myObj.mySym) //o/p is right but actually the key isnt symbol to preserve:
const myObj2={
    name:"Rhea",
    age:19,
    // [mySym]: "key1", //now it is actually being used as a symbol
    "full Name ": "Rhea Jose"
} 
// console.log(myObj)
// console.log(myObj2)
// console.log(myObj2[mySym]) //IMPORTANT [] W/O " " USED HERE

// Object.freeze(myObj2) //wont allow you to change any values 
// myObj2.age=22
// console.log(myObj2.age) //no error but changes didnt propagate

// Functions are treated as Type 1 citizens: no discrimination , you can use them like variables
myObj2.greeting = function(){
    console.log(`Hello World`)
}
myObj2.greeting2 = function(){
    console.log(`Hello World, I am ${this.name}, but not ${this["full Name "]}`) //string interpolation ``
}

console.log(myObj2.greeting) // Function nahi aaya bas uska refernce aaya hai
console.log(myObj2.greeting())
console.log(myObj2.greeting2())

// we mostly use . only but exceptions [] exist