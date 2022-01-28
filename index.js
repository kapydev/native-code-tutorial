const findPrime = require("./findPrime")
const findPrimeNative = require("./build/Release/findprimes")

const input = 200000

let result

console.time("Native")
result = findPrimeNative("Tortoise")
console.timeEnd("Native")
console.log(result)

console.time("JS Find Primes")
result = findPrime(input)
console.timeEnd("JS Find Primes")
console.log(result)