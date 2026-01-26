console.log(`Question 2: Filter Expiring Subscriptions (Next 30 Days)`)
// Context: You're building a notification system to alert users whose subscriptions expire in the next 30 days. Current date: "2026-01-25".
// Input:
// javascript

console.log(`Your Task: Use filter to get subscriptions expiring between "2026-01-25" and "2026-02-24" (next 30 days).`)
// Expected Output:
// javascript
// [
//   {user: "john@email.com", plan: "Premium", expiryDate: "2026-02-10"},
//   {user: "mike@email.com", plan: "Premium", expiryDate: "2026-01-28"},
//   {user: "emma@email.com", plan: "Pro", expiryDate: "2026-02-20"},
//   {user: "lisa@email.com", plan: "Premium", expiryDate: "2026-02-05"}
// ]

const userDetails = [
  {user: "john@email.com", plan: "Premium", expiryDate: "2026-02-10"},
  {user: "sarah@email.com", plan: "Basic", expiryDate: "2026-03-15"},
  {user: "mike@email.com", plan: "Premium", expiryDate: "2026-01-28"},
  {user: "emma@email.com", plan: "Pro", expiryDate: "2026-02-20"},
  {user: "tom@email.com", plan: "Basic", expiryDate: "2026-04-01"},
  {user: "lisa@email.com", plan: "Premium", expiryDate: "2026-02-05"}
]

let currentDate = "2026-01-25";
const filteredUsers = userDetails.filter(user=> user.expiryDate >= currentDate && user.expiryDate <= "2026-02-24");
console.log(filteredUsers);