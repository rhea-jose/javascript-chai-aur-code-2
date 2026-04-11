const arr1=[0,1,2]
const arr2=[3,4]
// arr1.push(arr2) //nested ho jata
// console.log(arr1)
// console.log(arr2)
// console.log(arr1[3][1]) //syntax not preffered so avoid pushing

// const newArr=arr1.concat(arr2) // returns a new arr so make sure var used to store it
// console.log(newArr)
// console.log(arr1,arr2)

// PREFERRED: SPREAD (concat 2 at time, spread multiple)
// const allNo=[...arr1,...arr2]
// console.log(allNo)
// console.log(arr1,arr2)

// const myArr=[0,1,3,[4,5,[7,8]],2,4,[9,10]]
// console.log(myArr.flat(Infinity)) //infinite depth handles all cases
// console.log(myArr.flat(1)) // remove nests of depth 1

// console.log(Array.isArray('HELLo'))
// console.log(Array.from('HELLo')) 
// console.log(Array.from({
//     name:"Rhea"
// }) //mention in arg what array you expect keys,values
// shift + option +down arrow to duplicate a line down

let s1=1,s2=3,m=[3,4,4]
console.log(Array.of(s1,s2,m))
