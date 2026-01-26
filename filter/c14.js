// Question 14: Filter Recent Transactions
// Context: You need to find transactions from the last 7 days for a financial report. Today's date is "2026-01-23".
// Input:


// javascript

// Your Task: Use filter to get transactions from "2026-01-17" onwards (last 7 days including today).
// Expected Output:


// javascript
// [
//   {id: 1, amount: 100, date: "2026-01-22"},
//   {id: 3, amount: 500, date: "2026-01-20"},
//   {id: 5, amount: 300, date: "2026-01-18"}
// ]

const transactions = [
  {id: 1, amount: 100, date: "2026-01-22"},
  {id: 2, amount: 250, date: "2026-01-15"},
  {id: 3, amount: 500, date: "2026-01-20"},
  {id: 4, amount: 75, date: "2026-01-10"},
  {id: 5, amount: 300, date: "2026-01-18"}
]

let todayDate = "2026-01-23";
const filteredTransactions = transactions.filter((amt) => amt.date >= "2026-01-17" && amt.date <= todayDate);
console.log(filteredTransactions);