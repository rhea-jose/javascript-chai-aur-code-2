// for of
const arr=[1,2,3]
for (const num of arr) {
    // console.log(num)
}
// Maps
// Objects dont remeber order of insertion of keys 
// Maps do

const map= new Map()
map.set("IN","+91")
map.set("IN","+91")
map.set("US","+10")
// unique valeus and order of entering preserved
// console.log(map)

for (const i of map) { //array ke form me key val pairs
    // console.log(i)
}
for (const [key,val] of map) {
    // console.log(key)
    // console.log(val)
}

const myObj={
    'game1':'newton',
    'game2':'batman'
}
// Objects are not iterable as below:
// for(const [key,val] of myObj){
//     // console.log(key,val)
// }
// use for in loops for objects not for of
for (const key in myObj) {
    // console.log(key)
    // console.log(myObj[key])
}

const myArr=['hello','namaste']
for (const key in myArr) { //for of gives values, for in gives keys which for array are its indexes
    // console.log(key)
    // console.log(myArr[key])
}
// maps are NOT ITERABLE using FOR IN LOOPS 

myArr.forEach(function(item){
    // console.log(item)
})
// callback function ka koi naam nahi hota hai
// function name(){}-> function (){}
// arrow to callback
// const name = ()=>{} -> ()=>{}
myArr.forEach((item)=>{
    // console.log(item)
})

function printMe(item){
    // console.log(item)
}
myArr.forEach(printMe) //give reference of function to execute
myArr.forEach((item,idx,arr)=>{
    // console.log(item,idx,arr)
})

const myCode=[
    {
        Lang:"Python",
        File:".py"
    },
    {
        Lang:"Java",
        File:".java"
    }
]
myCode.forEach((item)=>{
    for(const key in item){
        console.log(key)
        console.log(item[key])
    }
})