console.log(`Question 3: Build Inventory Summary from Orders`)
// Context: Warehouse system needs to calculate total units sold and revenue per product from order data.
// Input:
// javascript

// Your Task: Use reduce to create summary object with totalUnitsSold and totalRevenue for each product.
// Expected Output:
// javascript
// {
//   Laptop: {totalUnitsSold: 4, totalRevenue: 3996},
//   Mouse: {totalUnitsSold: 7, totalRevenue: 175},
//   Keyboard: {totalUnitsSold: 3, totalRevenue: 225}
// }

const productDetails = [
  {orderId: "ORD001", product: "Laptop", units: 2, pricePerUnit: 999},
  {orderId: "ORD002", product: "Mouse", units: 5, pricePerUnit: 25},
  {orderId: "ORD003", product: "Laptop", units: 1, pricePerUnit: 999},
  {orderId: "ORD004", product: "Keyboard", units: 3, pricePerUnit: 75},
  {orderId: "ORD005", product: "Mouse", units: 2, pricePerUnit: 25},
  {orderId: "ORD006", product: "Laptop", units: 1, pricePerUnit: 999}
]
const categorizedProducts = productDetails.reduce((total, item)=>{
    const key = item.product;
    if(!total[key]){
        total[key] = {totalUnitsSold: 0, totalRevenue : 0};      
    }
    total[key].totalUnitsSold += item.units;
    total[key].totalRevenue += (item.units * item.pricePerUnit);// revenue = units* price per unit
    return total;
}, {});
console.log(categorizedProducts);