const accountId = 1234
let emailId = "bb@gmail.com"
var password = "12345"
City = "Kasal"
let State 
// accountId = 4321 // This is not allowed becuse accountId is a Constant variable

console.log(accountId)

emailId = "bab@gmail.com"
password = "54321"
City = "Mumbai"

/*
    Prefer not to use var because of issue in block scope & functional scope
*/
console.table([accountId,emailId,password,City,State])