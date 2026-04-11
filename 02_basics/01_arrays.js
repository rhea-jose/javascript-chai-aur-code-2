// ()->parantheses
// []->brackets
// {}->braces
// in js, array can have elements of DIFF DATATYPES too + are RESIZABLE
// COPYING ARRAY -> SHALLOW COPY IN JAVASCRIPT (REFERENCE SAME PLACE IN MEMORY)

// const myArr=[0,true,'Rhea',true]
// const newArr= new Array(1,'Rhea',true)
// logging an arr on web will show you 2 prototypes nested

// Methods
// myArr.push(6)
// console.log(myArr)
// myArr.pop()
// console.log(myArr)
// myArr.unshift(6)
// console.log(myArr)
// myArr.shift() //like popping from beggining
// console.log(myArr)
// myArr.shift(6)

// console.log(myArr.indexOf(true))
// console.log(myArr.includes(true))
// console.log(myArr.join()) // single strign iwth elements delimited my comma
// console.log(typeof myArr.join())

const ogArr=[0,1,2,3,4,5]
console.log(ogArr)
console.log(ogArr.slice(1,3)) // slice excludes 3 and doesnt affect og array
console.log(ogArr)
console.log(ogArr.splice(1,3)) //splice not only includes 3 but also manipulates og array
console.log(ogArr)

