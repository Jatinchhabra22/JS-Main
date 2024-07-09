const user = {
    username : "jatin",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `); // this use karna hi padta h 
        console.log(this); // iska ek baar op dekh smjh jaega // 
    }
}

  user.welcomeMessage()// jatin, welcome to website
  user.username="sam"
  user.welcomeMessage() // sam welcome to website

// WAY 1 TO DECLARE FN // 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// WAY 2 // 


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// WAY 3 -- ARROW FUNCTION // 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()