const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", " batman"] 

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);  // this will create array in another array 
// console.log(marvel_heros[3][1]); // will give flash 


// CONCATINATION // 

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  // this will give an array including all the elements 


// SPREAD METHOD(MOSTLY THIS IS USED AS DO SE ZYADA ARRAYS ADD KAR SKTE HAI)

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// ------ // 

const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // this will give an array jisme sare element ek single array ke andar honge
// ek baar op check kar smjh aa jaega 

console.log(real_another_array);


// // 

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
