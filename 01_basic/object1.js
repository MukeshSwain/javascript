/*singleton : if we make object using constroctor method then it is called as singleton
syntax : Object.creat
*/

//Object Literal :
//declaration

/*
To use a Symbol as a key of an object we have to use [] and write the symbol inside [] 
And for access also 
*/

const mySymb = Symbol("key1")
// console.log([mySymb])
const jsuser = {
    name : "Mukesh Swain",
    age : 21,
    isLogin : false,
    [mySymb]:"MyNAMe1",
    
}

console.log(jsuser[mySymb]) //Important for interview prespective

jsuser.greeting = function (){
    console.log("Hello jsuser")
}
jsuser.greetName =function (){
    console.log(`Hello jsuser ${this.name}`)
 }
jsuser.greeting()
jsuser.greetName()
console.log(typeof jsuser.greetName)

//********************************************** merging Two objects *******************************/
const ob1 = {1:"a",2:"b",3:"c"}
const ob2 = {1:"x",2:"y",3:"z"}
// const merg = {...ob1,...ob2}
const merg = Object.assign({},ob1,ob2)
console.log(merg)

//********************** getting key and values of an object ***** */
console.log(Object.keys(jsuser));//returns all the keys of specified object and return type is array
console.log(Object.values(jsuser));//return all the values of the given object inside array
console.log(Object.entries(jsuser));
console.log(jsuser.hasOwnProperty("age"))

//****************** Object destructuring********************* */
const course = {
    name :"javascipt",
    price : 999,
    courseInstructor:"Hitesh Bhaiya"
}
const {courseInstructor : teacher} = course; //
const {name} = course;
const {price} = course;
console.log(teacher,name,"at "+price);
console.log(typeof price)