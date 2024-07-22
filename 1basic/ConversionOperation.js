let score = 33
console.log(typeof score);// number
let a=  Number(score)
console.log(typeof a) // number
let score1 = "33"
console.log(typeof score1);// string

let score2 = "Aman"
let ValueInNumber1 = Number(score2)
console.log(typeof  ValueInNumber1); // number

let score3 = null
let ValueInNumber = Number(score3)
console.log(typeof ValueInNumber );// number
let score4 
console.log(typeof score4); // undefined

let score5 = null
console.log(typeof score5) // object
let n = undefined
let valueInNumber = Number(n)
console.log(typeof valueInNumber); // number
let bool = true
console.log(typeof bool); // boolean

let isLoggedIn = 1
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
//empty value and also for 0 value
let isLoggedIn1 = ""
let booleanIsLoggedIn1 =Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1) // false

let num= 33
let strnum=String(num)
console.log(typeof strnum); // string



//"33" => 33
//"33abc"  => NaN