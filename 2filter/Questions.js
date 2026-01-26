// Question 1: Filter Eligible Loan Applicants
// Context: A bank needs to filter loan applicants who meet all criteria: credit score >= 650, annual income >= $40,000, and no existing defaults.
// Input:
// javascript
// [
//   {name: "Alice Johnson", creditScore: 720, income: 55000, hasDefaults: false},
//   {name: "Bob Smith", creditScore: 680, income: 45000, hasDefaults: true},
//   {name: "Charlie Brown", creditScore: 600, income: 60000, hasDefaults: false},
//   {name: "Diana Prince", creditScore: 750, income: 80000, hasDefaults: false},
//   {name: "Eve Davis", creditScore: 670, income: 35000, hasDefaults: false},
//   {name: "Frank Miller", creditScore: 690, income: 50000, hasDefaults: false}
// ]
// Your Task: Use filter to get applicants who qualify (creditScore >= 650 AND income >= 40000 AND hasDefaults === false).
// Expected Output:
// javascript
// [
//   {name: "Alice Johnson", creditScore: 720, income: 55000, hasDefaults: false},
//   {name: "Diana Prince", creditScore: 750, income: 80000, hasDefaults: false},
//   {name: "Frank Miller", creditScore: 690, income: 50000, hasDefaults: false}
// ]
// Question 2: Filter Expiring Subscriptions (Next 30 Days)
// Context: You're building a notification system to alert users whose subscriptions expire in the next 30 days. Current date: "2026-01-25".
// Input:
// javascript
// [
//   {user: "john@email.com", plan: "Premium", expiryDate: "2026-02-10"},
//   {user: "sarah@email.com", plan: "Basic", expiryDate: "2026-03-15"},
//   {user: "mike@email.com", plan: "Premium", expiryDate: "2026-01-28"},
//   {user: "emma@email.com", plan: "Pro", expiryDate: "2026-02-20"},
//   {user: "tom@email.com", plan: "Basic", expiryDate: "2026-04-01"},
//   {user: "lisa@email.com", plan: "Premium", expiryDate: "2026-02-05"}
// ]
// Your Task: Use filter to get subscriptions expiring between "2026-01-25" and "2026-02-24" (next 30 days).
// Expected Output:
// javascript
// [
//   {user: "john@email.com", plan: "Premium", expiryDate: "2026-02-10"},
//   {user: "mike@email.com", plan: "Premium", expiryDate: "2026-01-28"},
//   {user: "emma@email.com", plan: "Pro", expiryDate: "2026-02-20"},
//   {user: "lisa@email.com", plan: "Premium", expiryDate: "2026-02-05"}
// ]
// Question 3: Filter High-Priority Unresolved Tickets
// Context: You're managing a customer support system. Filter tickets that are high or critical priority, still open, and older than 2 days. Today: "2026-01-25".
// Input:
// javascript
// [
//   {id: 101, priority: "high", status: "open", createdDate: "2026-01-20"},
//   {id: 102, priority: "low", status: "open", createdDate: "2026-01-18"},
//   {id: 103, priority: "critical", status: "closed", createdDate: "2026-01-15"},
//   {id: 104, priority: "critical", status: "open", createdDate: "2026-01-22"},
//   {id: 105, priority: "medium", status: "open", createdDate: "2026-01-10"},
//   {id: 106, priority: "high", status: "open", createdDate: "2026-01-24"},
//   {id: 107, priority: "critical", status: "open", createdDate: "2026-01-19"}
// ]
// Your Task: Use filter to get tickets where (priority is "high" OR "critical") AND status === "open" AND createdDate <= "2026-01-23".
// Expected Output:
// javascript
// [
//   {id: 101, priority: "high", status: "open", createdDate: "2026-01-20"},
//   {id: 104, priority: "critical", status: "open", createdDate: "2026-01-22"},
//   {id: 107, priority: "critical", status: "open", createdDate: "2026-01-19"}
// ]
// Question 4: Filter Eligible Products for Flash Sale
// Context: E-commerce flash sale criteria: products with rating >= 4.0, stock >= 10 units, price between $20-$200, and category is either "electronics" or "home".
// Input:
// javascript
// [
//   {name: "Bluetooth Speaker", category: "electronics", price: 45, rating: 4.5, stock: 25},
//   {name: "Coffee Maker", category: "home", price: 89, rating: 4.2, stock: 8},
//   {name: "Desk Lamp", category: "home", price: 35, rating: 4.7, stock: 15},
//   {name: "Laptop Stand", category: "accessories", price: 30, rating: 4.6, stock: 20},
//   {name: "Wireless Mouse", category: "electronics", price: 25, rating: 3.8, stock: 50},
//   {name: "Smart Bulb", category: "home", price: 18, rating: 4.3, stock: 30},
//   {name: "USB Hub", category: "electronics", price: 22, rating: 4.4, stock: 12},
//   {name: "Air Purifier", category: "home", price: 150, rating: 4.8, stock: 5}
// ]
// Your Task: Use filter to get products where rating >= 4.0 AND stock >= 10 AND price is $20-$200 AND category is "electronics" or "home".
// Expected Output:
// javascript
// [
//   {name: "Bluetooth Speaker", category: "electronics", price: 45, rating: 4.5, stock: 25},
//   {name: "Desk Lamp", category: "home", price: 35, rating: 4.7, stock: 15},
//   {name: "USB Hub", category: "electronics", price: 22, rating: 4.4, stock: 12}
// // ]
// 12:10
Question 5: Filter Qualified Job Candidates
Context: HR system filtering candidates for a senior developer position: minimum 5 years experience, knows either "React" or "Angular", available to start within 30 days, and expected salary <= $120,000.
Input:
javascript
[
  {name: "Alex Chen", experience: 7, skills: ["React", "Node.js"], availableInDays: 15, expectedSalary: 110000},
  {name: "Maria Garcia", experience: 4, skills: ["Angular", "TypeScript"], availableInDays: 20, expectedSalary: 95000},
  {name: "James Wilson", experience: 6, skills: ["Vue.js", "Python"], availableInDays: 10, expectedSalary: 105000},
  {name: "Lisa Anderson", experience: 8, skills: ["React", "GraphQL"], availableInDays: 45, expectedSalary: 115000},
  {name: "David Lee", experience: 5, skills: ["Angular", "Java"], availableInDays: 25, expectedSalary: 125000},
  {name: "Sophie Martin", experience: 9, skills: ["React", "TypeScript"], availableInDays: 20, expectedSalary: 118000}
]
Your Task: Use filter to get candidates where experience >= 5 AND skills include "React" OR "Angular" AND availableInDays <= 30 AND expectedSalary <= 120000.
Expected Output:
javascript
[
  {name: "Alex Chen", experience: 7, skills: ["React", "Node.js"], availableInDays: 15, expectedSalary: 110000},
  {name: "Sophie Martin", experience: 9, skills: ["React", "TypeScript"], availableInDays: 20, expectedSalary: 118000}
]
Question 6: Filter Suspicious Transactions
Context: Fraud detection system flags transactions: amount > $5000 OR (amount > $1000 AND location different from user's home country) OR transaction time between 2 AM - 5 AM.
Input:
javascript
[
  {id: "T001", amount: 450, location: "USA", userCountry: "USA", time: "14:30"},
  {id: "T002", amount: 6500, location: "USA", userCountry: "USA", time: "10:00"},
  {id: "T003", amount: 1200, location: "UK", userCountry: "USA", time: "16:45"},
  {id: "T004", amount: 800, location: "USA", userCountry: "USA", time: "03:15"},
  {id: "T005", amount: 2500, location: "Canada", userCountry: "Canada", time: "12:00"},
  {id: "T006", amount: 950, location: "USA", userCountry: "USA", time: "04:30"},
  {id: "T007", amount: 1500, location: "Mexico", userCountry: "USA", time: "18:00"}
]
Your Task: Use filter to flag transactions where amount > 5000 OR (amount > 1000 AND location !== userCountry) OR time is between "02:00" and "05:00".
Expected Output:
javascript
[
  {id: "T002", amount: 6500, location: "USA", userCountry: "USA", time: "10:00"},
  {id: "T003", amount: 1200, location: "UK", userCountry: "USA", time: "16:45"},
  {id: "T004", amount: 800, location: "USA", userCountry: "USA", time: "03:15"},
  {id: "T006", amount: 950, location: "USA", userCountry: "USA", time: "04:30"},
  {id: "T007", amount: 1500, location: "Mexico", userCountry: "USA", time: "18:00"}
]
Question 7: Filter Valid Restaurant Orders
Context: Restaurant system validates orders: must have at least 1 item, total amount >= $10, delivery address exists, and order time is between 10 AM - 10 PM.
Input:
javascript
[
  {orderId: "ORD001", items: 3, total: 45.50, address: "123 Main St", orderTime: "12:30"},
  {orderId: "ORD002", items: 0, total: 0, address: "456 Oak Ave", orderTime: "14:00"},
  {orderId: "ORD003", items: 2, total: 8.75, address: "789 Pine Rd", orderTime: "19:45"},
  {orderId: "ORD004", items: 1, total: 15.00, address: "", orderTime: "18:00"},
  {orderId: "ORD005", items: 4, total: 62.30, address: "321 Elm St", orderTime: "22:30"},
  {orderId: "ORD006", items: 2, total: 28.90, address: "654 Maple Dr", orderTime: "20:15"}
]
Your Task: Use filter to get valid orders where items > 0 AND total >= 10 AND address is not empty AND orderTime is between "10:00" and "22:00".
Expected Output:
javascript
[
  {orderId: "ORD001", items: 3, total: 45.50, address: "123 Main St", orderTime: "12:30"},
  {orderId: "ORD006", items: 2, total: 28.90, address: "654 Maple Dr", orderTime: "20:15"}
]
Question 8: Filter Overdue Library Books
Context: Library system to find overdue books: borrowing period is 14 days, and you need books borrowed more than 14 days ago that are not yet returned. Today: "2026-01-25".
Input:
javascript
[
  {bookId: "B001", title: "JavaScript Guide", borrowDate: "2026-01-05", returnDate: null},
  {bookId: "B002", title: "Python Basics", borrowDate: "2026-01-15", returnDate: "2026-01-22"},
  {bookId: "B003", title: "Data Science", borrowDate: "2025-12-28", returnDate: null},
  {bookId: "B004", title: "Web Development", borrowDate: "2026-01-18", returnDate: null},
  {bookId: "B005", title: "Machine Learning", borrowDate: "2026-01-08", returnDate: null},
  {bookId: "B006", title: "React Handbook", borrowDate: "2026-01-12", returnDate: "2026-01-24"}
]
Your Task: Use filter to get books where returnDate is null AND borrowDate is more than 14 days before "2026-01-25" (i.e., borrowed on or before "2026-01-11").
Expected Output:
javascript
[
  {bookId: "B001", title: "JavaScript Guide", borrowDate: "2026-01-05", returnDate: null},
  {bookId: "B003", title: "Data Science", borrowDate: "2025-12-28", returnDate: null},
  {bookId: "B005", title: "Machine Learning", borrowDate: "2026-01-08", returnDate: null}
]
Question 9: Filter Eligible Scholarship Students
Context: University scholarship criteria: GPA >= 3.5, family income < $50,000, enrolled in at least 12 credit hours, and no disciplinary actions.
Input:
javascript
[
  {name: "Emma Wilson", gpa: 3.8, familyIncome: 45000, credits: 15, disciplinary: false},
  {name: "Noah Brown", gpa: 3.6, familyIncome: 55000, credits: 16, disciplinary: false},
  {name: "Olivia Davis", gpa: 3.9, familyIncome: 38000, credits: 12, disciplinary: true},
  {name: "Liam Johnson", gpa: 3.4, familyIncome: 42000, credits: 14, disciplinary: false},
  {name: "Ava Martinez", gpa: 3.7, familyIncome: 48000, credits: 18, disciplinary: false},
  {name: "Sophia Garcia", gpa: 3.5, familyIncome: 35000, credits: 10, disciplinary: false},
  {name: "Mason Lee", gpa: 3.85, familyIncome: 40000, credits: 15, disciplinary: false}
]
Your Task: Use filter to get students where gpa >= 3.5 AND familyIncome < 50000 AND credits >= 12 AND disciplinary === false.
Expected Output:
javascript
[
  {name: "Emma Wilson", gpa: 3.8, familyIncome: 45000, credits: 15, disciplinary: false},
  {name: "Ava Martinez", gpa: 3.7, familyIncome: 48000, credits: 18, disciplinary: false},
  {name: "Mason Lee", gpa: 3.85, familyIncome: 40000, credits: 15, disciplinary: false}
]
Question 10: Filter Actionable User Feedback
Context: Product team wants to prioritize feedback: rating <= 3 stars, feedback text is not empty, user is a paid customer, and feedback is from the last 30 days. Today: "2026-01-25".
Input:
javascript
[
  {userId: "U001", rating: 2, feedback: "App crashes frequently", isPaid: true, date: "2026-01-20"},
  {userId: "U002", rating: 5, feedback: "Great experience!", isPaid: true, date: "2026-01-22"},
  {userId: "U003", rating: 1, feedback: "Very slow performance", isPaid: false, date: "2026-01-18"},
  {userId: "U004", rating: 3, feedback: "", isPaid: true, date: "2026-01-15"},
  {userId: "U005", rating: 2, feedback: "Needs better UI", isPaid: true, date: "2025-12-20"},
  {userId: "U006", rating: 3, feedback: "Missing key features", isPaid: true, date: "2026-01-23"},
  {userId: "U007", rating: 1, feedback: "Cannot login", isPaid: true, date: "2026-01-19"}
]
Your Task: Use filter to get feedback where rating <= 3 AND feedback is not empty AND isPaid === true AND date >= "2025-12-26" (last 30 days).
Expected Output:
javascript
[
  {userId: "U001", rating: 2, feedback: "App crashes frequently", isPaid: true, date: "2026-01-20"},
  {userId: "U006", rating: 3, feedback: "Missing key features", isPaid: true, date: "2026-01-23"},
  {userId: "U007", rating: 1, feedback: "Cannot login", isPaid: true, date: "2026-01-19"}
]