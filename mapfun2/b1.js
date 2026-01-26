
console.log(`Your Task: Use map to calculate the final price after applying the discount percentage.`)
// Expected Output:
// javascript
// [
//   {name: "Laptop", originalPrice: 1000, finalPrice: 900},
//   {name: "Phone", originalPrice: 500, finalPrice: 425},
//   {name: "Tablet", originalPrice: 300, finalPrice: 240},
//   {name: "Watch", originalPrice: 200, finalPrice: 190}
// ]


const originalPrice = [
  {name: "Laptop", price: 1000, discount: 10},
  {name: "Phone", price: 500, discount: 15},
  {name: "Tablet", price: 300, discount: 20},
  {name: "Watch", price: 200, discount: 5}
]

const finalPrice = originalPrice.map(item => {
    return {name: item.name,
    originalPrice: item.price, 
    finalprice: item.price - (item.price* item.discount/100)}
    });



console.log(finalPrice);
