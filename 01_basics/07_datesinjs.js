let myDate = new Date()
// console.log(myDate); // will give todays date 

 //  console.log(myDate.toString());
 //  console.log(myDate.toISOString());
 //  console.log(myDate.toLocaleDateString());  // 4/27/2024
 //  console.log(myDate.toDateString()); // sat apr 27 2024

 // let myCreatedDate = new Date(2023, 0 ,23) // months in js starts from 0 
 // console.log(myCreatedDate.toString());

 let myCreatedDate = new Date(2023,0,23,5,3)
 console.log(myCreatedDate.toLocaleString());

// check properties of date such as getmonth etc
