// Question 5: Flatten Nested Order Structure
// Context: E-commerce API returns nested orders. You need a flat array of all individual items across all orders.
// Input:
// javascript

// Your Task: Use reduce to create a flat array of all items with orderId and customer added to each item.
// Expected Output:
// javascript
// [
//   {orderId: "ORD001", customer: "John", productId: "P1", name: "Laptop", price: 999},
//   {orderId: "ORD001", customer: "John", productId: "P2", name: "Mouse", price: 25},
//   {orderId: "ORD002", customer: "Sarah", productId: "P3", name: "Keyboard", price: 75},
//   {orderId: "ORD003", customer: "Mike", productId: "P1", name: "Laptop", price: 999},
//   {orderId: "ORD003", customer: "Mike", productId: "P4", name: "Monitor", price: 300}
// ]

const nestedAPI = [
  {
    orderId: "ORD001",
    customer: "John",
    items: [
      {productId: "P1", name: "Laptop", price: 999},
      {productId: "P2", name: "Mouse", price: 25}
    ]
  },
  {
    orderId: "ORD002",
    customer: "Sarah",
    items: [
      {productId: "P3", name: "Keyboard", price: 75}
    ]
  },
  {
    orderId: "ORD003",
    customer: "Mike",
    items: [
      {productId: "P1", name: "Laptop", price: 999},
      {productId: "P4", name: "Monitor", price: 300}
    ]
  }
]

const flattenedAPI = nestedAPI.reduce((accum, value)=>{
    value.items.forEach(item =>{
        accum.push({
            orderId: value.orderId,
            customer: value.customer,
            productId: item.productId,
            name: item.name,
            price: item.price

        });

    })
    return accum;

}, []);
console.log(flattenedAPI);