// ARRAYS // 

// arrays from mdn docs // 

const myArr = [ 0, 1, 2, 3, 4 ,5]
const myHeros = ["shaktiman" , "nagraaj"]

const myArr2 = new Array(1,2,3,4)


// console.log(myHeros[0]);

// Array methods // 

myArr.push(6) // adds elements in the array 
myArr.pop() // removes the LAST ELEMENT from the array 

myArr.unshift(90) // this adds 90 in the beginnning of the array 
myArr.shift() // removes the first element from an array  


// console.log(myArr.includes(2)); // true or false 
// console.log(myArr.indexOf(9)); // returns -1 if not present 

const newArr = myArr.join()

// console.log(newArr); // THIS BECOMES A STRING  // 
// console.log(myArr);


// slice, splice -- very imp concept 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);