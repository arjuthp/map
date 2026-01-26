
console.log(`Question 2: Filter Names Starting with "A"`)
console.log(`Context: You need to filter a list of names to show only those starting with the letter "A".`)
// Input:
// javascript

// Your Task: Use filter to get names that start with "A".
// Expected Output:


// javascript
// ["Alice", "Anna", "Andrew"]

const names = ["Alice", "Bob", "Anna", "Charlie", "Andrew", "David"]
const nameStartingWIthA = names.filter((word)=>word.startsWith("A", 0));
console.log(nameStartingWIthA)