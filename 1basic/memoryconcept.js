// Stack and heap memory
// stack is used in primitive ...... copy of data
// heap (non primitive)........ reference data/ original data

let MyName = "Aman"
let anothername = MyName
anothername= "Engineer"
console.log(anothername); // Engineer
let user= {
    email: "abc@gmail.com",
    pass: "abc@123"
}
let user1= user
user1.email="aaa@gmail.com"
console.log(user.email);  //aaa@gmail.com
console.log(user1.email); //aaa@gmail.com
