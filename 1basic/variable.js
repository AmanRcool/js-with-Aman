const  accountId = 1234
let accountEmail = "ar7999723@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
// not allowed accountId=2
 console.log(accountId);
 accountEmail = "a3@gmail.com"
 accountPassword ="15"
accountCity = "Jaipur"
let accountState


console.table([accountEmail, accountPassword,accountState]  );  
// console.table(gives output in tabular form)
/*   prefer not to use var because of issue in block scope and function scope .
we can declare variable without let var and char also.

*/
