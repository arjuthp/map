console.log(`Question 3: Filter High-Priority Unresolved Tickets`)
// Context: You're managing a customer support system. Filter tickets that are high or critical priority, still open, and older than 2 days. Today: "2026-01-25".
// Input:
// javascript

// Your Task: Use filter to get tickets where (priority is "high" OR "critical") AND status === "open" AND createdDate <= "2026-01-23".
// Expected Output:
// javascript
// [
//   {id: 101, priority: "high", status: "open", createdDate: "2026-01-20"},
//   {id: 104, priority: "critical", status: "open", createdDate: "2026-01-22"},
//   {id: 107, priority: "critical", status: "open", createdDate: "2026-01-19"}
// ]

const custormerDetails = [
  {id: 101, priority: "high", status: "open", createdDate: "2026-01-20"},
  {id: 102, priority: "low", status: "open", createdDate: "2026-01-18"},
  {id: 103, priority: "critical", status: "closed", createdDate: "2026-01-15"},
  {id: 104, priority: "critical", status: "open", createdDate: "2026-01-22"},
  {id: 105, priority: "medium", status: "open", createdDate: "2026-01-10"},
  {id: 106, priority: "high", status: "open", createdDate: "2026-01-24"},
  {id: 107, priority: "critical", status: "open", createdDate: "2026-01-19"}
]

let currentDate = "2026-01-25";
const highPriorityCustomers = custormerDetails.filter(customer =>
    customer.priority ==="high" || customer.priority==="critical" && 
    custormerDetails.status ==="open" &&
    createdDate <= "2026-01-23");
console.log(highPriorityCustomers);