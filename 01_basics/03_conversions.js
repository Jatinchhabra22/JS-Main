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

// arithmetic and string operations //

let str1 = "hello "
let str2 = "jatin"
let str3 = str1 + str2

console.log(str3); 

console.log("1" + 2 ); // 12
console.log(1 + "2" ); // 12
console.log("1" + "2" ); //12
console.log("1" + "2" + 2 );  // 122
console.log(1 + 2 + "2");  // 32

// ECMA script ke acc hota h ye sb