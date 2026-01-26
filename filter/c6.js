console.log(`Question 6: Filter Products in Stock`)
// Context: You're building an e-commerce site and need to show only products that are available (stock > 0).
// Input:


// javascript

// Your Task: Use filter to get products with stock greater than 0.
// Expected Output:


// javascript
// [
//   {name: "Laptop", stock: 5},
//   {name: "Tablet", stock: 3},
//   {name: "Headphones", stock: 10}
// ]

const products = [
  {name: "Laptop", stock: 5},
  {name: "Phone", stock: 0},
  {name: "Tablet", stock: 3},
  {name: "Watch", stock: 0},
  {name: "Headphones", stock: 10}
]

const filteredProducts = products.filter((item) => item.stock > 0);
console.log(filteredProducts);