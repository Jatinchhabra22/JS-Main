let score = "33abc"; // string datatype

console.log(typeof score); // ans is string 
console.log(typeof (score)); // ans is string 

let valueInNumber = Number(score) // N should always be capital 
console.log(typeof valueInNumber); // number
console.log(valueInNumber)

// as score(33abc) is not a number then valueinnumber will give NaN(not a number)

// number to boolean conversion

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // converts 1 --> true
console.log(booleanIsLoggedIn);

// 1 -- true
// 0 -- false
// "jatin" -- true
// "" -- false