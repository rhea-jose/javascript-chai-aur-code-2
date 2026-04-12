// strict equal ===
// not only checks if values are equal, also check if datatypes are equal
// !== also exists

// switch me agar break na lagao toh sab execute ho jata hai except default at end

// Truthy and falsy avlues

// false -> "",0,-0, BigInt 0n, null , undefined, NaN
// true -> [], "0","false", " ", {}, function(){} called empty function

userEmails=[]
// if(userEmails) eval to true even when empty
// if(userEmail.length===0) is correct to check empty

const emptyObj={}
// if(emptyObj) wrong
if(Object.keys(emptyObj).length===0){}

// false ==0 ->true
// false== '' -> true
// 0 == '' -> true

// nullish coalescing operator (??) : null undefined

let val1;
// val1 can take on multiple values being returned by diff fucntions, it matches the first non null or non undefined value and assigns that to val 1
// it isnt preffered to have null or undefiend in vars , becasue it becomes difficult to loacte where it came from
// we prefer to store some kind of flags atleast
val1=null??5??10
console.log(val1)
