// console.log(`Question 12: Filter Products by Price Range
// C`)ontext: 
// //re building a product filter feature. Get products within a specific price range ($50-$500).
// Input:


// javascript

// Your Task: Use filter to get products with price between $50 and $500 (inclusive).
// Expected Output:


// javascript
// [
//   {name: "Headphones", price: 150},
//   {name: "Tablet", price: 399}
// ]

const products = [
  {name: "Phone", price: 699},
  {name: "Headphones", price: 150},
  {name: "Charger", price: 25},
  {name: "Tablet", price: 399},
  {name: "Laptop", price: 1200},
  {name: "Mouse", price: 45}
]

const filteredProducts = products.filter((item) => item.price >= 50  && item.price <= 500);
console.log(filteredProducts);
