// in lang like c -> resposibility of developer to allocate and free memory
// in modern lang -> auto garbage collection etc take place

// Stack -> Primitive ->Copy
// Heap -> Non Primitive -> Actual Reference

// let myName="Rhea"
// let newName=myName
// console.log(newName);
// newName="Jose"
// console.log(newName);
// console.log(myName); // since string is primitive
// so copy was given to newName
// hence chnages in new Name are to copy not to og 

const userOne={
    name:"Rhea",
    age:22
}
const userTwo=userOne
userTwo.age=18
console.log(userOne)

// {
//     name:"Rhea",
//     age:22
// } -> this part in heap
// userOne,userTwo->in Stack , they get reference to stuff in heap