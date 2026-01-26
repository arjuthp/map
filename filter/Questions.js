// Question 1: Get All Even Numbers
// Context: You have an array of numbers and need to get only the even numbers.
// Input:


// javascript
// [1, 2, 3, 4, 5, 6, 7, 8]
// Your Task: Use filter to get only even numbers.
// Expected Output:


// javascript
// [2, 4, 6, 8]

Question 2: Filter Names Starting with "A"
Context: You need to filter a list of names to show only those starting with the letter "A".
Input:


javascript
["Alice", "Bob", "Anna", "Charlie", "Andrew", "David"]
Your Task: Use filter to get names that start with "A".
Expected Output:


javascript
["Alice", "Anna", "Andrew"]

Question 3: Get Numbers Greater Than 10
Context: You have a list of numbers and need only those greater than 10.
Input:


javascript
[5, 12, 8, 130, 44, 3, 15, 2]
Your Task: Use filter to get all numbers greater than 10.
Expected Output:


javascript
[12, 130, 44, 15]

Question 4: Remove Empty Strings
Context: You have user input data with some empty strings that need to be removed.
Input:


javascript
["hello", "", "world", "", "test", "data"]
Your Task: Use filter to remove all empty strings.
Expected Output:


javascript
["hello", "world", "test", "data"]

Question 5: Get Adults (Age > 18)
Context: You need to filter a list of users to show only adults for a voting registration system.
Input:


javascript
[
  {name: "John", age: 25},
  {name: "Sarah", age: 16},
  {name: "Mike", age: 30},
  {name: "Emma", age: 15},
  {name: "Tom", age: 22}
]
Your Task: Use filter to get users with age greater than 18.
Expected Output:


javascript
[
  {name: "John", age: 25},
  {name: "Mike", age: 30},
  {name: "Tom", age: 22}
]

Question 6: Filter Products in Stock
Context: You're building an e-commerce site and need to show only products that are available (stock > 0).
Input:


javascript
[
  {name: "Laptop", stock: 5},
  {name: "Phone", stock: 0},
  {name: "Tablet", stock: 3},
  {name: "Watch", stock: 0},
  {name: "Headphones", stock: 10}
]
Your Task: Use filter to get products with stock greater than 0.
Expected Output:

 v
javascript
[
  {name: "Laptop", stock: 5},
  {name: "Tablet", stock: 3},
  {name: "Headphones", stock: 10}
]

Question 7: Get Long Strings
Context: You need to filter out short strings and keep only strings with more than 5 characters.
Input:


javascript
["hi", "hello", "hey", "welcome", "ok", "goodbye", "yes"]
Your Task: Use filter to get strings with length greater than 5.
Expected Output:


javascript
["welcome", "goodbye"]

Question 8: Filter Objects with Email Property
Context: Some user records are incomplete. You need only users who have an email address.
Input:


javascript
[
  {name: "John", email: "john@example.com"},
  {name: "Sarah"},
  {name: "Mike", email: "mike@example.com"},
  {name: "Emma"},
  {name: "Tom", email: "tom@example.com"}
]
Your Task: Use filter to get users who have an email property.
Expected Output:


javascript
[
  {name: "John", email: "john@example.com"},
  {name: "Mike", email: "mike@example.com"},
  {name: "Tom", email: "tom@example.com"}
]

Question 9: Get Prime Numbers
Context: You need to filter a list of numbers to show only prime numbers (numbers divisible only by 1 and themselves).
Input:


javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
Your Task: Use filter to get only prime numbers.
Expected Output:


javascript
[2, 3, 5, 7, 11]

Question 10: Filter with Multiple Conditions
Context: You need active users who are also adults for sending marketing emails.
Input:


javascript
[
  {name: "John", age: 25, isActive: true},
  {name: "Sarah", age: 16, isActive: true},
  {name: "Mike", age: 30, isActive: false},
  {name: "Emma", age: 22, isActive: true},
  {name: "Tom", age: 17, isActive: false}
]
Your Task: Use filter to get users where age > 18 AND isActive === true.
Expected Output:


javascript
[
  {name: "John", age: 25, isActive: true},
  {name: "Emma", age: 22, isActive: true}
]

Question 11: Filter Passed Students
Context: You need to filter students who passed the exam (score >= 50) and also attended more than 75% classes.
Input:


javascript
[
  {name: "Alice", score: 85, attendance: 80},
  {name: "Bob", score: 45, attendance: 90},
  {name: "Charlie", score: 70, attendance: 70},
  {name: "Diana", score: 92, attendance: 85},
  {name: "Eve", score: 55, attendance: 60}
]
Your Task: Use filter to get students with score >= 50 AND attendance > 75.
Expected Output:


javascript
[
  {name: "Alice", score: 85, attendance: 80},
  {name: "Diana", score: 92, attendance: 85}
]

Question 12: Filter Products by Price Range
Context: You're building a product filter feature. Get products within a specific price range ($50-$500).
Input:


javascript
[
  {name: "Phone", price: 699},
  {name: "Headphones", price: 150},
  {name: "Charger", price: 25},
  {name: "Tablet", price: 399},
  {name: "Laptop", price: 1200},
  {name: "Mouse", price: 45}
]
Your Task: Use filter to get products with price between $50 and $500 (inclusive).
Expected Output:


javascript
[
  {name: "Headphones", price: 150},
  {name: "Tablet", price: 399}
]

Question 13: Filter by Category and Availability
Context: You need to show only electronics that are available in your inventory system.
Input:


javascript
[
  {name: "Laptop", category: "electronics", available: true},
  {name: "Desk", category: "furniture", available: true},
  {name: "Phone", category: "electronics", available: false},
  {name: "Chair", category: "furniture", available: false},
  {name: "Tablet", category: "electronics", available: true},
  {name: "Monitor", category: "electronics", available: false}
]
Your Task: Use filter to get items where category === "electronics" AND available === true.
Expected Output:


javascript
[
  {name: "Laptop", category: "electronics", available: true},
  {name: "Tablet", category: "electronics", available: true}
]

Question 14: Filter Recent Transactions
Context: You need to find transactions from the last 7 days for a financial report. Today's date is "2026-01-23".
Input:


javascript
[
  {id: 1, amount: 100, date: "2026-01-22"},
  {id: 2, amount: 250, date: "2026-01-15"},
  {id: 3, amount: 500, date: "2026-01-20"},
  {id: 4, amount: 75, date: "2026-01-10"},
  {id: 5, amount: 300, date: "2026-01-18"}
]
Your Task: Use filter to get transactions from "2026-01-17" onwards (last 7 days including today).
Expected Output:


javascript
[
  {id: 1, amount: 100, date: "2026-01-22"},
  {id: 3, amount: 500, date: "2026-01-20"},
  {id: 5, amount: 300, date: "2026-01-18"}
]

Question 15: Filter Valid Email Addresses
Context: You need to validate and filter email addresses that contain "@" and "." characters.
Input:


javascript
[
  "john@example.com",
  "invalid-email",
  "sarah@test.co",
  "notemail.com",
  "mike@domain",
  "emma@company.org"
]
Your Task: Use filter to get only strings that contain both "@" and ".".
Expected Output:


javascript
[
  "john@example.com",
  "sarah@test.co",
  "emma@company.org"
]