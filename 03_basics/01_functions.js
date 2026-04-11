// function definition
// function sayMyName(){
//     console.log("r")
// }

// sayMyName reference
// sayMyName() execution 
// function sum(num1,num2){ //parameters
//     console.log(num1+num2)
// }
// function sum(num1,num2){ //parameters
//     return num1+num2
// }
// sum()
// result=sum(1,2) //arguments
// console.log("Result: ",result)

// jab kuch pass nahi hua but argument expected tha tab undefined pass ho jata hai 
// which is why sum fun me undef+undef -> get convtd to number as nan+nan -> nan

// handle if nothing passed
// function hasLoggedIn(username='sam'){
//     if(username===undefined){
//         console.log('please enter valid username')
//         return 
//     }
//     return `${username} just logged in` //return string in one place and nothing at another
// }
// hasLoggedIn()

// console.log(hasLoggedIn("rheajose"))
// console.log(hasLoggedIn())

// To handle situation when you dont know how many parameters can be there
function calculateCartPrice(val1,val2,...num1){ //rest operator->looks like spread but works differently based on where we use it
    // rest op-> get a lot of values ->bundles them up
    console.log(num1)
}
calculateCartPrice(230,125,20,450)

// when passing objects to a function ensure that those keys actually exist in the object 
// typescript check typesafety, in JS you need if elses