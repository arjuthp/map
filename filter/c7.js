console.log(`Question 7: Get Long Strings`)
// Context: You need to filter out short strings and keep only strings with more than 5 characters.
// Input:


// javascript

// Your Task: Use filter to get strings with length greater than 5.
// Expected Output:


// javascript
// ["welcome", "goodbye"]

const strings = ["hi", "hello", "hey", "welcome", "ok", "goodbye", "yes"]
const filteredStrings = strings.filter((strlen) => strlen.length > 5);
console.log(filteredStrings);