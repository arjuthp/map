console.log('Question 8: Extract Initials from Names')
// Context: You need to create initials (first letter of each word) from full names for user avatars.
// Input:
// javascript
// ["John Doe", "Jane Smith", "Bob Johnson"]
// Your Task: Use map to extract initials from each name.
// Expected Output:
// javascript
// ["JD", "JS", "BJ"]

const fullNames = ["John Doe", "Jane Smith", "Bob Johnson"]

const initials = fullNames.map(name => name.split(" ").map(word => word[0]).join(""));
console.log(initials);
