// dates in js calculated from jan 1 1970  // TC39 is working on temporal 


let myDate = new Date()
console.log(myDate); // current date of run program 2024-07-25T15:29:45.742Z
console.log(myDate.toString()); //current date of run program  Thu Jul 25 2024 15:30:31 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleDateString());//7/25/2024
console.log(myDate.toDateString());// Thu Jul 25 2024
console.log(typeof myDate); // object
console.log(myDate.toLocaleString()); // 7/25/2024, 3:35:54 PM

//   timestamp
 let myTimeStamp =Date.now()
 console.log(Math.floor(myTimeStamp)/1000); // 1721921990.202