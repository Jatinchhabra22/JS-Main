// promise 1 // 

const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // db calls , cryotograogy , network calls 
    setTimeout(function(){
        console.log('async task complete');
        resolve() // iske baad promise consumed print hoga 
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed ");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", emai: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"hitesh", password:"123"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    },2000)
})

promiseFour.then()