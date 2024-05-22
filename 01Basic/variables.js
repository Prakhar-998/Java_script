const accountId = 123456
let accountEmail= "abcd@gmail.com"
var accountPassword ="abcd1234"
accountCity ="Delhi"

let accountState;
//accountId=2 // not allowed
accountEmail="prak@gmail.com"
console.log(accountId);
console.log(accountEmail);

console.table([accountId,accountEmail,accountCity,accountState]);

/*
dont use var, it is old and has block scope problem {} and functional scope
use let instead f
*/