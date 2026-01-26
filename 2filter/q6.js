console.log(`Question 6: Filter Suspicious Transactions`)
// Context: Fraud detection system flags transactions: amount > $5000 OR (amount > $1000 AND location different from user's home country) OR transaction time between 2 AM - 5 AM.
// Input:
// javascript

// Your Task: Use filter to flag transactions where amount > 5000 OR (amount > 1000 AND location !== userCountry) OR time is between "02:00" and "05:00".
// Expected Output:
// javascript
// [
//   {id: "T002", amount: 6500, location: "USA", userCountry: "USA", time: "10:00"},
//   {id: "T003", amount: 1200, location: "UK", userCountry: "USA", time: "16:45"},
//   {id: "T004", amount: 800, location: "USA", userCountry: "USA", time: "03:15"},
//   {id: "T006", amount: 950, location: "USA", userCountry: "USA", time: "04:30"},
//   {id: "T007", amount: 1500, location: "Mexico", userCountry: "USA", time: "18:00"}
// ]

const transactions = [
  {id: "T001", amount: 450, location: "USA", userCountry: "USA", time: "14:30"},
  {id: "T002", amount: 6500, location: "USA", userCountry: "USA", time: "10:00"},
  {id: "T003", amount: 1200, location: "UK", userCountry: "USA", time: "16:45"},
  {id: "T004", amount: 800, location: "USA", userCountry: "USA", time: "03:15"},
  {id: "T005", amount: 2500, location: "Canada", userCountry: "Canada", time: "12:00"},
  {id: "T006", amount: 950, location: "USA", userCountry: "USA", time: "04:30"},
  {id: "T007", amount: 1500, location: "Mexico", userCountry: "USA", time: "18:00"}
]


const SuspiciousTransactions = transactions.filter ((transaction)=> 
    
    transaction.amount > 5000 || 
    transaction.amount > 1000 &&
    transaction.location !== transaction.userCountry ||
    transaction.time >= "2:00" && transaction.time <= "5:00" 
)
console.log(SuspiciousTransactions);