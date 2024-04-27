const score = 100 
//console.log(score);

const balance = new Number(100) // this specifally assigns balance as a Number 
//console.log(balance);

//console.log(balance.toString()); // this becomes string and now we can have all properties of string such as length etc

//console.log((balance.toFixed(2))); // this will convert 100 to 100.00

const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(3));// hover on toPrecisipn and undertstand about this function
// 3 is kitne value pe focus karega function

const anotherNumber = 23.55
//console.log(anotherNumber.toPrecision(2));

const hundreds = 1000000
//console.log(hundreds.toLocaleString()); // commas lagjata hai according to american 

// for indian standards 
//console.log(hundreds.toLocaleString('en-IN'));


// ---- MATHS ---- //


//console.log(Math.abs(-4));
//console.log(Math.round(4.6));
//
//console.log(Math.ceil(4.2)); // upper value return karega 
//
//console.log(Math.max(3,4,5,6));

console.log(Math.random());  // always bw 0 and 1

console.log(Math.random()*10 + 1); // bw 1 and 10

console.log((Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1) + min))) // imp line in code // 

