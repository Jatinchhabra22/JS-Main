// for loop // 

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        // console.log("5 is best ");
    }
    // console.log(index);
}

for (let i = 0; i <= 10; i++) {
   // console.log(`outer loop : ${i}`)
    for(let j = 0; j<=10; j++){
      //  console.log(`inner loop value ${j} and inner loop ${i} `);
      //console.log(i + '*' + j + '=' + i*j);
    }
    
}

const myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}



// <-------> // 

// break and continue statments //


for (let index = 1; index <= 20; index++) {
    if(index == 5){
       // console.log("detected 5");
        break; // 5 ate hi bahar aa ja loop se 
    }
   // console.log(`value of i is ${index}`)
    
}


for (let index = 1; index <= 20; index++) {
    if(index == 5){
       // console.log("detected 5");
        continue; // 5 ate hi 5 ko chodh ke agle iteration pe chale jaega loop 
    }
    // console.log(`value of i is ${index}`)
    
}

