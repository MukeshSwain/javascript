
console.log(add(8))
function add(num){
    return num +num
}

//*************************** hoisting ************ */
/*
when we as
sign a function to a variable and call that fuction through 
the variable name before function defination or Before the variable 
declaration then it gives an error Example given below....
*/
// console.log(addfun(90)) IT GIVES AN ERROR CAREFULLL.......
const addfun = function add(num){
    return num +num
}

console.log(addfun(90))