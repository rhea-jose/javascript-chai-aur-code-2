// let s1="Hi"
// let s2=" there"
// console.log(s1+s2); //outdated
// console.log(`${s1} , why are you ${s2}`)


const myStr=new String("Baapre-baap")
// if you log on console, we get 0-indexed (key index and value char) object 
// also length, prototype and primitve values...etc a lot  are given as its properties
// console.log(myStr.__proto__)
// // even tho concat is in proto we dont need to do myStr.__proto__.concat just myStr.conact is enough
// console.log(myStr.charAt(2))
// console.log(myStr.indexOf('a'))
// console.log(myStr.substring(0,3)) // positive values as start and end
// console.log(myStr.substring(-8,3)) // neg values are ignored , starts at 0 
// console.log(myStr.slice(-8,-4)) // negative and pos allowed values as start and end
// console.log(myStr.slice(-8,6)) // negative and pos allowed values as start and end

// const newStr="  rhea.   "
// console.log(newStr.trim())

// const url="https://hitesh.com/hitesh%20choudhary"
// console.log(url.replace('%20',"-"))
// console.log(url.includes('hit'))

const mine="hello-world-"
console.log(mine.split("-"))