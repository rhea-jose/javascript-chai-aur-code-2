// Generally, we consume promises 
// How to create promise?

// const promiseOne = new Promise((resolve,reject)=>{
//     //do async operations
//     // db calls( file ), network operations,cryptography
//     setTimeout(()=>{
//         console.log("Async task is complete")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){ //but here resolve and .then never got connected , to connect them you need to call resolve within setTimeout
//     console.log("Promise consumed") 
// }) // .then() directly connected to resolve

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Second Async Task")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async Task resolved")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({ //resolve passes value of the arg to function of then
//             username:"rhea-jose",
//             age:19
//         })
//     },1000)
// }).then(function(userObj){
//     console.log(userObj)
// })
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(error){
//             reject("ERROR: Something went wrong!")
//         } else{
//             resolve({
//                 username:"rhea-jose",
//                 age: 19
//             })
//         }
//     },1000)
// })
// .then(function(userObj){ //resolve first comes here
//     console.log(userObj)
//     return userObj.username
// }) 
// .then(function(uname){ //first then comes to second then and so on chain..
//     console.log(uname)
// })
// .catch(function(er){ // reject comes here
//     console.log(er)
// })
// .finally(()=>console.log('Default: Promise is either resolved or rejected')) // default , execeuted regardless of whether your promise was rejected or resolved

// You can also handle promises using async and await, 
// if no error then tum aage badh sakte ho otherwise nahi -> using then and catch handles errors gracefully, here it doesnt but sometimes we may prefer this method too as per use case 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(error){
            reject("ERROR: Something went wrong!")
        } else{
            resolve({
                username:"rhea-jose",
                age: 19
            })
        }
    },1000)
})

// async function consumePromiseFive(){ 
//     // await promiseFive() wrong because promise is an object , to call it we dont use brackets
//     const returnedResponse = await promiseFive
//     console.log(returnedResponse)
// }
// consumePromiseFive() // this works well as long as error false but if true , not handled properly
// async function consumePromiseFive(){ 
//     try {
//         const returnedResponse = await promiseFive
//         console.log(returnedResponse)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive() 

async function getAllUsers(){
    // fetch used to be a library even though now it is just an object
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') // response will be string
        // console.log(response)
        const data= await response.json() //NOT ONLY EXAMPLES DISCUSSED ABOVE BUT ALSO CONVERTING STRING TO JSON ETC TAKE A LOT OF TIME, SO IF YOU DONT PUT AWAIT HERE, YOU WILL GET PENDING PROMISE ERROR
        // response.json returns a promise,since we didnt await it we were getting yhe promise object (Promise { <pending> }) itself
        // await unwraps the Promise and gives you the resolved value inside it. Without it, you just hold the Promise wrapper itself.
        console.log(data)
    } catch (error) {
        console.log("E: ",error)
    }
}
getAllUsers()

// below what i tried myself
// new Promise(function(resolve,reject){
//     const response =fetch('https://jsonplaceholder.typicode.com/users')
//     resolve(response)
// })
// .then(function(response){
//     const data=response.json;
//     return data
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(err){
//     console.log("E: ",err)
// })

// solution : since fetch already is a Promise, apply thenables to it directly

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data))
.catch((err)=>console.log(err))

// agar hum sab run karte hai toh fetch wale ka answer sabse pehle aata hai because fetch has microtask queue which is a high priority queue