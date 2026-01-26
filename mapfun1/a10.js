console.log(`Question 10: Extract Nested Product Names`)
// Context: You have an e-commerce API response with nested product data and need just the product names.
// Input:
// javascript
// [
//   {id: 1, product: {name: "Phone", price: 699}},
//   {id: 2, product: {name: "Laptop", price: 1299}},
//   {id: 3, product: {name: "Tablet", price: 499}}
// ]
// Your Task: Use map to extract just the product names from the nested structure.
// Expected Output:
// javascript
// ["Phone", "Laptop", "Tablet"]


const products = [
  {id: 1, product: {name: "Phone", price: 699}},
  {id: 2, product: {name: "Laptop", price: 1299}},
  {id: 3, product: {name: "Tablet", price: 499}}
]

const productNames = products.map(item => item.product.name)
console.log(productNames)
