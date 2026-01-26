console.log(`Question 9: Convert Strings to Objects`)
// Context: You have an array of words and need to create objects containing each word and its length.
// Input:
// javascript
// ["apple", "banana", "cherry"]
// Your Task: Use map to create objects with 'value' and 'length' properties.
// Expected Output:
// javascript
// [
//   {value: "apple", length: 5},
//   {value: "banana", length: 6},
//   {value: "cherry", length: 6}
// ]



const input = ["apple", "banana", "cherry"];
const result = input.map(name => ({vlaue: name, length: name.length}));

console.log(result);