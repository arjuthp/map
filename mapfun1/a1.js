console.log(`Question 1: Double All Numbers`)

// Context: You have an array of numbers and need to double each one.
// Input:
// javascript
// [1, 2, 3, 4, 5]
// Your Task: Use map to double each number.
// Expected Output:
// javascript
// [2, 4, 6, 8, 10]

const inputNum = [1,2,3,4,5];

const result = inputNum.map ((num) => num * 2)
console.log(result);