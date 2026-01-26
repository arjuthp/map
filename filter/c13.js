// Question 13: Filter by Category and Availability
// Context: You need to show only electronics that are available in your inventory system.
// Input:


// javascript

// Your Task: Use filter to get items where category === "electronics" AND available === true.
// Expected Output:


// javascript
// [
//   {name: "Laptop", category: "electronics", available: true},
//   {name: "Tablet", category: "electronics", available: true}
// ]

const items = [
  {name: "Laptop", category: "electronics", available: true},
  {name: "Desk", category: "furniture", available: true},
  {name: "Phone", category: "electronics", available: false},
  {name: "Chair", category: "furniture", available: false},
  {name: "Tablet", category: "electronics", available: true},
  {name: "Monitor", category: "electronics", available: false}
]

const filteredItems = items.filter((item)=> item.category === "electronics" && item.available ===true);
console.log(filteredItems);