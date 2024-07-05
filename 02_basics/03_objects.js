// OBJECTS IN JS // 

// object literals  -- one of the method to declare objects in js // 


const mySym = Symbol("key1")  // declaring a symbol

const jsUser = {

    name : "jatin", // this will be stored as a string datatype
    "full name " : "jatin chhabra",
    [mySym]: "mykey1", // remember this is the correct way to declare symbol in js
    age : 18,
    location : "delhi",
    email : "jatin@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday "]
}

console.log(jsUser.email); // method 1 to print 
console.log(jsUser["email"]) // method 2 to print 
console.log(jsUser["full name "]); // full name hamein asie hi print karvana padega 
 console.log(jsUser[mySym]) // stored as string 

// chaging email after initalising object 
jsUser.email = "hitesh@chatgpt.com"


// Object.freeze(JsUser) // ab we cant change jsuser mai kuch bhi
jsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);



// declaring function

 jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting()); // this will give (hello js user)

jsUser.greeting2 = function(){
    console.log(`hello js user , ${this.name}`);
}

console.log(jsUser.greeting2());