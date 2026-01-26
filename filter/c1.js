console.log(`Question 1: Get All Even Numbers`)
console.log(`Context: You have an array of numbers and need to get only the even numbers.`)
// Input:


// javascript

// Your Task: Use filter to get only even numbers.
// Expected Output:
// javascript
// [2, 4, 6, 8]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const evenNumbers = numbers.filter((num )=> num%2 ===0);
console.log(evenNumbers);