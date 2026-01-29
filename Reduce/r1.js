console.log(`Question 1: Calculate Shopping Cart Total with Tax`)
// Context: E-commerce checkout system needs to calculate subtotal, tax (8%), and final total from cart items.
// Input:
// javascript

// Your Task: Use reduce to calculate an object with subtotal, tax (8% of subtotal), and total.
// Expected Output:
// javascript
// {
//   subtotal: 1724,
//   tax: 137.92,
//   total: 1861.92
// }
const productCostDetails = [
  {product: "Laptop", price: 999, quantity: 1},
  {product: "Mouse", price: 25, quantity: 2},
  {product: "Keyboard", price: 75, quantity: 1},
  {product: "Monitor", price: 300, quantity: 2}
]

 let tax = 0.08
 const reducedCost = productCostDetails.reduce((total, value)=> {
  console.log("totallll", total)
  console.log("valueeeeeee", value)
  const totalvalue = value.price * value.quantity;// 999*1=999
  // console.log("total value", totalvalue)
  total.subtotal += totalvalue;//0 + 999
  total.tax = total.subtotal * tax;//999*0.08//988
  total.total = total.subtotal + total.tax; 
  console.log("tooooooootal", total)
  return total;//
  
 }, {subtotal:0, tax:0 , total:0 });


 console.log(reducedCost);


