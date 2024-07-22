console.log(2>1);//true
console.log("2" >1); //true
console.log("0" > "0"); //false
console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); //true

console.log(undefined > 0); // false  ..... all case values are false
// === strict datatype check it also check datatype also
// avoid these comparison and write clean code 

console.log("2" === 2) // false