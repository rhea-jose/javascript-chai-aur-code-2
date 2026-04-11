// let myDate=new Date();
// console.log(myDate) // not readable

// console.log(myDate.toString()) // bit more readable
// console.log(myDate.toDateString()) // bit more readable
// console.log(myDate.toTimeString()) // bit more readable

// console.log(myDate.toISOString()) // bit more readable
// console.log(myDate.toJSON()) // bit more readable

// console.log(myDate.toLocaleString()) // us string format 
// console.log(myDate.toLocaleDateString()) // us date format

// console.log(typeof myDate) //OBJECT

// let newDate=new Date(1926,4,32)
// console.log(newDate.toString())
// let newDate2=new Date(2006,10,26,11,34,23) // months start from 0
// console.log(newDate2.toString())

let newDate=new Date("2024-01-30")
// console.log(newDate.toString())
// let newDate2=new Date("30-01-2024")
// console.log(newDate2.toString())
// console.log(newDate2.toLocaleString())

// let timeStamp=Date.now() //gives answer in milli sec Note: is a method not object 
// useful for quizzes etc where fastest answer is more valued etc
// console.log(timeStamp)
// millisecond value means starting from 1 jan 1970 how many ms have passed

// it becomes hard to compare dates in this case to do so:
// console.log(newDate.getTime()) // convert date to ms form to compare
// console.log(Math.floor(Date.now()/1000))

// Add 1 etc to ensure end user doesnt get confused
// console.log(newDate.getDay()) // Tue ->2 
// console.log(newDate.getDate())
// console.log(newDate.getFullYear())
// console.log(newDate.getMinutes())
// console.log(newDate.getSeconds())

//  
newDate.toLocaleString('default',{
    weekday:"long"
    // etc use properties for specific results
})