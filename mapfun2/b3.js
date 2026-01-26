
console.log(`Question 13: Add Index and Format Array Items`)
console.log(`Context: You're creating a numbered list for display. You need to add position numbers and format each item.`)
// Input:
// javascript
// ["Learn JavaScript", "Build a project", "Deploy to production", "Get feedback"]
// Your Task: Use map (with index parameter) to create formatted strings like "1. Learn JavaScript", "2. Build a project", etc.
// Expected Output:
// javascript
// [
//   "1. Learn JavaScript",
//   "2. Build a project",
//   "3. Deploy to production",
//   "4. Get feedback"
// ]


const items = ["Learn JavaScript", "Build a project", "Deploy to production", "Get feedback"];
const formattedArray = items.map((item, i) => `${i + 1}. ${item}`);

console.log(formattedArray);