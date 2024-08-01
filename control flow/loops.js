for (let i = 0; i < 11; i++) {
     console.log(i);
    
}

//********************* for of ************************ */
const map = new Map()
map.set("one",1)
map.set("two",2)
map.set("three",3)
map.set("four",4)
// console.log(map)
for (const [key, val] of map) {//array destructuring [key, val]
    console.log(`${key} :- ${val}`)
}
// * point we can not use for of loop with object (It gives an error you can't iterate).

//********************* for in loop ************************** */
const myObject = {
    js :"javascript",
    rb : "Ruby",
    py :"Python"
}
// console.log(myObject)
//We use for in loop for Objects:
for (const key in myObject) {
    console.log(key, myObject[key])
        
    
}
//araay 
const ar = [1,2,3,4]
for (const key in ar) {
    console.log(ar[key])
}