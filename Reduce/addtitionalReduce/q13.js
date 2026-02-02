
/*
Question 13: Restaurant Order Analytics
Context: Restaurant management system needs to analyze orders for menu optimization and revenue tracking.
Input:
*/


/*
Your Task: Use reduce to calculate:
- totalRevenue: sum of all order values
- revenueByCategory: total revenue per food category
- popularItems: item names with total quantity sold
- serverPerformance: revenue generated per server
- averageOrderValue: average value per order

Expected Output:
{
  totalRevenue: 95,
  revenueByCategory: {Main: 69, Appetizer: 8, Beverage: 6, Side: 5},
  popularItems: {Burger: 3, Salad: 1, Pasta: 1, Pizza: 1, Soda: 2, Fries: 1},
  serverPerformance: {Alice: 48, Bob: 23, Charlie: 17},
  averageOrderValue: 23.75
}
*/

const restaurantOrders = [
  {orderId: "O001", items: [{name: "Burger", price: 12, category: "Main", quantity: 2}], table: 5, server: "Alice", timestamp: "2026-01-25 12:30"},
  {orderId: "O002", items: [{name: "Salad", price: 8, category: "Appetizer", quantity: 1}, {name: "Pasta", price: 15, category: "Main", quantity: 1}], table: 3, server: "Bob", timestamp: "2026-01-25 13:00"},
  {orderId: "O003", items: [{name: "Pizza", price: 18, category: "Main", quantity: 1}, {name: "Soda", price: 3, category: "Beverage", quantity: 2}], table: 7, server: "Alice", timestamp: "2026-01-25 13:15"},
  {orderId: "O004", items: [{name: "Burger", price: 12, category: "Main", quantity: 1}, {name: "Fries", price: 5, category: "Side", quantity: 1}], table: 2, server: "Charlie", timestamp: "2026-01-25 14:00"}
];
 
const optimizedOrders = restaurantOrders.reduce((accum, value) =>{
    let orderTotal = 0;
    value.items.forEach(elememt => {
        const itemRevenue = elememt.price * elememt.quantity;
        orderTotal += itemRevenue;
        accum.totalRevenue += itemRevenue;
        accum.revenueByCategory[elememt.category] = (accum.revenueByCategory[elememt.category] || 0) + itemRevenue;
        accum.popularItems[elememt.name] = (accum.popularItems[elememt.name]||0) + elememt.quantity;
        
    });
    accum.serverPerformance[value.server] = (accum.serverPerformance[value.server]||0) + orderTotal;
    
    accum.averageOrderValue = accum.totalRevenue/restaurantOrders.length;
    return accum
    
},{
    totalRevenue: 0,
    revenueByCategory: {},
    popularItems:{},
    serverPerformance: {},
    averageOrderValue:0,
});
console.log(optimizedOrders);