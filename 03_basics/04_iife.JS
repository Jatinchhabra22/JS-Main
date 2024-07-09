// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// (funciton code)(execution)

// iife bascially means ki function ko immidately execute kardo 
// iife ko ham global scope ke pollution ko prevent krne ke lie use karte h // 
// AGAR 2 IIFE LIKHNE HAI TO ; YE LAGA LENA YAAD SE 
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
