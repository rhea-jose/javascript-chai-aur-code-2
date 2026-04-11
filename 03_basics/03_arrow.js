const user={
    username:"Rheajose",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome!`)
        console.log(this)
    }
}
// evthg within user {} is in current context, to refer to keys within it, use this and arrow
// user.welcomeMsg()

// user.username="rhejose"
// user.welcomeMsg()

// console.log(this) //empty becuase we are in a node environment, in web console we see window
// Because in browser the most global object is a window 
// we extracted the part that runs java code in browser to software ->node,deno etc names so now {} this global

function chai(){
    let username='hitesh'
    console.log(this) // this doesnt work in functions in the same way as it does for objs
    console.log(this.username) //cant access ->undefined
} 
// chai()

// arrow functions

const myFun=function(){
    console.log('hello')
    console.log(this)
}
const myFun2=()=>{ //remove function keyword and put arrow after parameter list
    console.log('hello')
    console.log(this)
}
// myFun() //this doesnt work as expected , long smth obtd
// myFun2() //this gives {}

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// implicit return 
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>{username:"hitesh"} //undefined
const addTwo=(num1,num2)=>({username:"hitesh"}) //undefined

// const addTwo2=(num1,num2)=>(num1+num2) //{ } me wrap -> return keyword likhna padega
// () return not needed
console.log(addTwo(3,4))
// console.log(addTwo2(3,4))