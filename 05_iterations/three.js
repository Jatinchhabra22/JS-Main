// for of loops // -- array specific loops 

const arr = [1,2,3,4,5]

for (const num of arr) { // for of loops 
    //console.log(num);
}

const greetings = "hello world!"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
}

// Maps // -- from mdn docs -- has uniwue values and has a set order // 

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")

// console.log(map);

for (const [key,value] of map) {
   // console.log(key,'-',value);
}


// object pe for of // -- nhi lagta bhaiya 

const myObject = {
    'game1' : 'NFS', 
    'game2': 'spiderman'
}
