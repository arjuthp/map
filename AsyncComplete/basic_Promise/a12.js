
// Q12: Use Promise.race
console.log("\nQ12: Race between 3 promises");
const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 2000));
const medium = new Promise(resolve => setTimeout(() => resolve("medium"), 1000));
const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 500));
// Use Promise.race:

Promise.race([slow, medium, fast]).then(result => console.log("winner:", result));