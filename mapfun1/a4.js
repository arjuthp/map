
console.log(`Question 4: Add Greeting Prefix`)
// Context: You're building a welcome message system that adds "Hello, " before each name.
// Input:
// javascript
// ["John", "Emma", "David"]
// Your Task: Use map to add "Hello, " before each name.
// Expected Output:
// javascript
// ["Hello, John", "Hello, Emma", "Hello, David"]

const inputNames = ["John", "Emma", "David"];
const welcomeMsg = inputNames.map((name)=> `Hello ${name},GOOD MORNING `);
console.log(welcomeMsg);