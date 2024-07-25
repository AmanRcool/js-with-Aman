const balance= new Number(100)
console.log(balance); // [Number: 100]
const num = 100
console.log(num); // 100
console.log(balance.toString()); // 100
console.log(balance.toString().length);// 3
console.log(balance.toFixed(3)); // 100.000
const num2 = 23.833
console.log(num2.toPrecision(2)); // 24 // it will check value after decimal if near to greater it will give greater 
const num3 = 23.333
console.log(num3.toPrecision(2)); // 23
const num4 = 111110000
console.log(num4.toLocaleString()); // 111,110,000
//  ++++++++++++ Math++++++++++++++++++ //


console.log(Math.PI); // 3.141592653589793
console.log(Math.sqrt(2,3));// 1.4142135623730951
console.log(Math.cbrt(2,4)); // 1.2599210498948732
console.log(Math.random()); // random values

//  +++++++++++++++++++++++++++++++++++++++++ ??
