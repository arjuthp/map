console.log(`Question 10: Filter Actionable User Feedback`)
// Context: Product team wants to prioritize feedback: rating <= 3 stars, feedback text is not empty, user is a paid customer, and feedback is from the last 30 days. Today: "2026-01-25".
// Input:
// javascript

// Your Task: Use filter to get feedback where rating <= 3 AND feedback is not empty AND isPaid === true AND date >= "2025-12-26" (last 30 days).
// Expected Output:
// javascript
// [
//   {userId: "U001", rating: 2, feedback: "App crashes frequently", isPaid: true, date: "2026-01-20"},
//   {userId: "U006", rating: 3, feedback: "Missing key features", isPaid: true, date: "2026-01-23"},
//   {userId: "U007", rating: 1, feedback: "Cannot login", isPaid: true, date: "2026-01-19"}
// ]

const customerFeedbacks = [
  {userId: "U001", rating: 2, feedback: "App crashes frequently", isPaid: true, date: "2026-01-20"},
  {userId: "U002", rating: 5, feedback: "Great experience!", isPaid: true, date: "2026-01-22"},
  {userId: "U003", rating: 1, feedback: "Very slow performance", isPaid: false, date: "2026-01-18"},
  {userId: "U004", rating: 3, feedback: "", isPaid: true, date: "2026-01-15"},
  {userId: "U005", rating: 2, feedback: "Needs better UI", isPaid: true, date: "2025-12-20"},
  {userId: "U006", rating: 3, feedback: "Missing key features", isPaid: true, date: "2026-01-23"},
  {userId: "U007", rating: 1, feedback: "Cannot login", isPaid: true, date: "2026-01-19"}
]
let currentDate = "2026-01-25";
const prioritizedFeedbacks = customerFeedbacks.filter((customer)=> customer.rating <=3 && customer.feedback !== "" && customer.isPaid === true && customer.date >= "2025-12-26");
console.log(prioritizedFeedbacks);