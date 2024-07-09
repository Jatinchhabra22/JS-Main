const userEmail = "h@hitesh.ai"

if(userEmail){ // isme hamne koi comparision hi nhi kiya just ye check karne bola ki email hai to if condition execute krdo
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

// falsy values 

/*
false , 0 , -0 , BigInt 0n, "", null, undefined, NaN
*/

// truthy values 

/*
"0" -- hanji string ke agar 0 hai to that is true , 'false'," ", [],{},function(){} */ 

const emptyObject = {}

if(Object.keys(emptyObject).length === 0 ){
    console.log("object empty ");
}

// Nullish Colaseing operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")