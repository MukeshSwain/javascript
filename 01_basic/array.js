let num = [1,2,3,4,5,"saktimaan"]
// console.log(num)

// num.push(90)
// num.push("Iron man") Used to push the specified element at end of the array

// num.pop() This method removes last element from the array

console.log("Before slice operation ancountered");
console.table(num)

// let slice = num.slice(1,4)
// console.log(slice) slice give the substring with the specified range ,remember the last parameter is excluded
// let splice = num.splice(1,4);
/* console.log(splice) the splice function returns the substring with the specified range ,
 Remember that it includes the last parameter . And it changes in the original array i.e it subracts the 
 Substrings from the original string with the specified range */
console.log("After splice ");
console.log("original array : ", num);
