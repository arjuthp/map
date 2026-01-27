console.log(`Question 2: Group Transactions by Category`)
console.log(`Context: Financial app needs to organize expenses by category for budget tracking.`)
// Input:
// javascript

// Your Task: Use reduce to group transactions by category with total amount spent per category.
// Expected Output:
// javascript
// {
//   food: {transactions: 3, total: 225},
//   utilities: {transactions: 2, total: 125},
//   entertainment: {transactions: 2, total: 45}
// }

const expenses = [
  {id: 1, description: "Grocery shopping", amount: 150, category: "food"},
  {id: 2, description: "Electric bill", amount: 80, category: "utilities"},
  {id: 3, description: "Restaurant dinner", amount: 60, category: "food"},
  {id: 4, description: "Gas bill", amount: 45, category: "utilities"},
  {id: 5, description: "Movie tickets", amount: 30, category: "entertainment"},
  {id: 6, description: "Coffee", amount: 15, category: "food"},
  {id: 7, description: "Netflix", amount: 15, category: "entertainment"}
]
const categorizedExpenses = expenses.reduce((total, item)=> {
    const key = item.category;
    if(!total[key]){
        total[key] = {transactions: 0,total: 0 };
    }
    total[key].transactions += 1;
    total[key].total += item.amount;
    return total;
},{});

console.log(categorizedExpenses);