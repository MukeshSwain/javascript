//we asumed that ..... is true or false

//falsy values :
// false, 0, -0,BigInt 0n, "", null, undefined, NaN //these are all falsy values

//truthy values :
// "0", "false", " ", [],{},function(){} //these are truthy values

//Nullish coalescing Operator : ??

let val1 = 4 ?? 10 //assigns 4
let val2 = null ?? 10 //assigns 10
let val3 = null ?? undefined //assigns undefined

console.log(val1)
console.log(val2)
console.log(val3)
