for (let i = 0; i < 11; i++) {
     console.log(i);
    
}

//********************* for of ************************ */
//Map is a object which contain distinct keys 
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
    // console.log(ar[key])
}

//******************* foreach ******************* */
const arr = [1,2,3,4,5,66]
arr.forEach(function (item){
    console.log(item)
})

arr.forEach((item,index,arrr)=>{
    console.log(item,index,arrr)

})

const myArrObjects = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myArrObjects.forEach((item)=>{
    console.log(item.languageName)
})
//forEach does not return any value...remeber it

//*************** filter ********************** */
// filter method is similar to forEach but return ...., that is 
//specified by the user...example----->
const arrNums = [1,2,3,4,5,6,7,8,9,10]
const  alist = arrNums.filter((item)=> item > 5)//implisite return
console.log(alist)

//************************* map ************************ */
// map is similar to filter ...-------........------>

const addTen = arrNums.map((item)=> item + 10)
console.log(addTen)

//**************** Chaining **************** */
const newNums = arrNums
                .map((item)=> item*10)
                .map((item)=> item + 1)
                .filter((num)=>{
                    return num>50
                })

console.log(newNums)


//************** reduce ************************** */
//it return a single value
const myNum = [1,2,3,4]

const num = myNum.reduce((accumulater,currentValue)=> {
    console.log("acc :"+accumulater)
    return accumulater + currentValue},20)//argument passed
console.log(num)

const shopCart = [
    {
        itemName : "item1",
        price : 379
    },
    {
        itemName : "item2",
        price : 979
    },
    {
        itemName : "item3",
        price : 5667
    }
]

const calcuPrice = shopCart.reduce((acc,price)=>acc+price.price,0)// here 0 is passed for acc.
console.log(calcuPrice)