console.log(`Question 4: Filter Eligible Products for Flash Sale`)
// Context: E-commerce flash sale criteria: products with rating >= 4.0, stock >= 10 units, price between $20-$200, and category is either "electronics" or "home".
// Input:
// javascript

// Your Task: Use filter to get products where rating >= 4.0 AND stock >= 10 AND price is $20-$200 AND category is "electronics" or "home".
// Expected Output:
// javascript
// [
//   {name: "Bluetooth Speaker", category: "electronics", price: 45, rating: 4.5, stock: 25},
//   {name: "Desk Lamp", category: "home", price: 35, rating: 4.7, stock: 15},
//   {name: "USB Hub", category: "electronics", price: 22, rating: 4.4, stock: 12}
// ]

const products = [
  {name: "Bluetooth Speaker", category: "electronics", price: 45, rating: 4.5, stock: 25},
  {name: "Coffee Maker", category: "home", price: 89, rating: 4.2, stock: 8},
  {name: "Desk Lamp", category: "home", price: 35, rating: 4.7, stock: 15},
  {name: "Laptop Stand", category: "accessories", price: 30, rating: 4.6, stock: 20},
  {name: "Wireless Mouse", category: "electronics", price: 25, rating: 3.8, stock: 50},
  {name: "Smart Bulb", category: "home", price: 18, rating: 4.3, stock: 30},
  {name: "USB Hub", category: "electronics", price: 22, rating: 4.4, stock: 12},
  {name: "Air Purifier", category: "home", price: 150, rating: 4.8, stock: 5}
]

const eligibleProducts = products.filter((items) => 
    items.category === "electronics" || items.category === "home" &&
    items.price >= 20 && items.price <= 200 &&
    items.rating >= 4.0 &&
    items.stock >= 10  
)
console.log(eligibleProducts);