// const tinderUser = new Object() // another way of declaring object 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = "false "

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "jatin",
            lastname: "chhabra",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// // 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({},obj1,obj2) // {} adding this is optional but is a good prac to do so
// console.log(obj3);


const obj3 = {...obj1, ...obj2} // mostly yahi use karenge (90% times use this )
// console.log(obj3);

console.log(Object.keys(tinderUser)); // The Object.keys() static method returns an array of a given object's 
// own enumerable string-keyed property names.

console.log(tinderUser.hasOwnProperty('isLoggedIn')) // bollean result // 