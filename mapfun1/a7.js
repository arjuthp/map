console.log(`Question 7: Format Prices with Currency`)
// Context: You have product prices as numbers and need to format them as currency strings with $ and 2 decimal places.
// Input:
// javascript
// [19.5, 25, 30.99, 100]
// Your Task: Use map to format prices as "$XX.XX".
// Expected Output:
// javascript
// ["$19.50", "$25.00", "$30.99", "$100.00"]


const input = [19.5, 25, 30.99, 100];
const currency = input.map((value) => `$${value.toFixed(2)}`);
console.log(currency);