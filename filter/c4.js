console.log(`Question 4: Remove Empty Strings
Context: You have user input data with some empty strings that need to be removed.`)
// Input:


// javascript

// Your Task: Use filter to remove all empty strings.
// Expected Output:


// javascript
// ["hello", "world", "test", "data"]

const userData = ["hello", "", "world", "", "test", "data"];
const filteredStrings = userData.filter((data) => !data == "");
console.log(filteredStrings);