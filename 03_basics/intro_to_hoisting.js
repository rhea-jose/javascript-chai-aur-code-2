console.log(addOnce(1)) //works 
function addOnce(val){ //function
    return val+1
}
console.log(addTwo(5)) //error
const addTwo=function(val){ //also function but called expression sometimes cause its like a varaible ig?
    return val+2 
}
