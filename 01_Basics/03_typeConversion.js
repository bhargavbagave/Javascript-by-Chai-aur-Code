let score1 = "33"
// let score2 = "33abc"
let score2 = null

let value1 = Number(score1)
let value2 = Number(score2)

console.log(typeof score1)
console.log(typeof score2)
console.log(typeof value2)

console.log(value2)

let score3 = null
let value3 = Number(score3)
console.log(typeof value3)
console.log(value3)

let score4 = true
let value4 = Number(score4)
console.log(typeof value4)
console.log(value4)

/*
Conversion to Number:
    "33" => 33
    "33abc" => NaN i.e Not a Number
    null => 0
    true => 1
    false => 0
*/

// Now conversion to boolean
console.log("\nConversion to Boolean: ")
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log("Result = ", booleanIsLoggedIn)

// 1 => true
// 0 => false

// Now conversion to String
console.log("\nConversion to String")
let n = 123
let str = String(n)
console.log(typeof n)
console.log(typeof str)
console.log(str)