console.log(`Question 7: Filter Valid Restaurant Orders`);
// Context: Restaurant system validates orders: must have at least 1 item, total amount >= $10, delivery address exists, and order time is between 10 AM - 10 PM.
// Input:
// javascript

// Your Task: Use filter to get valid orders where items > 0 AND total >= 10 AND address is not empty AND orderTime is between "10:00" and "22:00".
// Expected Output:
// javascript
// [
//   {orderId: "ORD001", items: 3, total: 45.50, address: "123 Main St", orderTime: "12:30"},
//   {orderId: "ORD006", items: 2, total: 28.90, address: "654 Maple Dr", orderTime: "20:15"}
// ]

const orderList = [
  {orderId: "ORD001", items: 3, total: 45.50, address: "123 Main St", orderTime: "12:30"},
  {orderId: "ORD002", items: 0, total: 0, address: "456 Oak Ave", orderTime: "14:00"},
  {orderId: "ORD003", items: 2, total: 8.75, address: "789 Pine Rd", orderTime: "19:45"},
  {orderId: "ORD004", items: 1, total: 15.00, address: "", orderTime: "18:00"},
  {orderId: "ORD005", items: 4, total: 62.30, address: "321 Elm St", orderTime: "22:30"},
  {orderId: "ORD006", items: 2, total: 28.90, address: "654 Maple Dr", orderTime: "20:15"}
]

const validOrders = orderList.filter((order)=> order.items >=1 && order.total >= 10 && order.address !=="" && order.orderTime >= "10:00"  && order.orderTime <= "22:00");
console.log(validOrders);