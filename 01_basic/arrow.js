const func = function(){
    console.log(this)//prints some properties, etc
}
func()
console.log(this)

const arrow = ()=>{
    console.log(this)
}
arrow()//work similar to (console.log(this)) in the global scope ,prints {}

//********************* implicite return in arrow func ************** */
/*
if we use curli braces then we must have return keyword to return a value.
But while we are using paranthesus or no curly brasses or no parenthesis
then we dont need to use return keyword to return , It aoutometicaly return ..

*/
const addTwo = (num1,num2)=> (num1+num2)//IMPLICITE RETURN (REMEMBER IT)
console.log(addTwo(111,2))