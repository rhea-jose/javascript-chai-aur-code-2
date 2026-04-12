// const coding=['Python','Discrete']
// const values= coding.forEach((item) => {
//     return item
// })
// console.log(values)
// For each isnt capable of returning values,

const myNums=[1,2,3,4,5]
// in FILTER , we dont need to write what is returned , automatriclaly the iterator like here item itself will be returned
// const newNums=myNums.filter((num)=>num>3) //single line callback
// const newNums2=myNums.filter((num)=>{
//     return num>3 //since {} used we need to write return
// }) //single line callback
const newNums=[]
myNums.forEach((num)=>{
    if(num>3){
        newNums.push(num)
    }
})
// console.log(newNums)
// console.log(newNums2)

const myNums2=[1,2,3,4]
// const nNums=myNums2.map((num)=>num+10) //returns automatcally 
const nNums=myNums2.map((num)=>{
    return num+10
}) //returns automatcally 
// console.log(myNums2)
// console.log(nNums)
// map transforms each el(modifies og), filter select some subset of og vals
// same length array, equal or smaller 
// filter expects condition not transformation
// nums.filter(n => n * 2) WRONG

const nums = [1, 2, 3, 4];

const result = nums
    .filter(n => n % 2 === 0) // [2,4] //returns og based on condition you've written
    .map(n => n * 10);        // [20,40] //returns what you've written

// console.log(result);

const myNo=[1,2,3,4]
// const total=myNo.reduce((accumulator,curr_val)=>{
//     return accumulator+curr_val
// },0) //init-> 0 stored in accum, curr val will be 1 then acc will be 0+1 , curr val 2 then acc =3 and so on
const total=myNo.reduce((accumulator,curr_val)=>accumulator+curr_val,0) //init-> 0 stored in accum, curr val will be 1 then acc will be 0+1 , curr val 2 then acc =3 and so on

console.log(total)
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const price=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(price)
