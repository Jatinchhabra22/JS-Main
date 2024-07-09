// if statement // 

const isUserLoggedIn = true

if(isUserLoggedIn){
//console.log("hello");
}

// === --> this checks the datatype also // 

// if(2==="2"){
//     console.log("executed");
// }

// ----- //

// const temprature = 41
// 
// if(temprature == 41){
//     console.log("temprature is 41");
// }
// else{
//     console.log("mujhe na pta bhai kitna hai temp ");
// }
// 
// 


//      const balance  = 1000
//      
//      // if(balance > 500) console.log("test"); // implicit scope -- not a good practice 
//      
//      if (balance < 500) {
//          console.log("less than 500");
//      } else if(balance < 750){
//          console.log("less than 750");
//      }
//      else if (balance<900){
//          console.log("balance than 900");
//      }
//      else if (balance < 1200){
//          console.log("balance less than 1200")
//      }



// <------> // 

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard){
   // console.log("allow to buy course ");
}

if(loggedInfromEmail || loggedInfromGoogle){
    // console.log("allow to buy ");
}

