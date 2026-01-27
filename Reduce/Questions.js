Question 1: Calculate Shopping Cart Total with Tax
Context: E-commerce checkout system needs to calculate subtotal, tax (8%), and final total from cart items.
Input:
javascript
[
  {product: "Laptop", price: 999, quantity: 1},
  {product: "Mouse", price: 25, quantity: 2},
  {product: "Keyboard", price: 75, quantity: 1},
  {product: "Monitor", price: 300, quantity: 2}
]
Your Task: Use reduce to calculate an object with subtotal, tax (8% of subtotal), and total.
Expected Output:
javascript
{
  subtotal: 1724,
  tax: 137.92,
  total: 1861.92
}
Question 2: Group Transactions by Category
Context: Financial app needs to organize expenses by category for budget tracking.
Input:
javascript
[
  {id: 1, description: "Grocery shopping", amount: 150, category: "food"},
  {id: 2, description: "Electric bill", amount: 80, category: "utilities"},
  {id: 3, description: "Restaurant dinner", amount: 60, category: "food"},
  {id: 4, description: "Gas bill", amount: 45, category: "utilities"},
  {id: 5, description: "Movie tickets", amount: 30, category: "entertainment"},
  {id: 6, description: "Coffee", amount: 15, category: "food"},
  {id: 7, description: "Netflix", amount: 15, category: "entertainment"}
]
Your Task: Use reduce to group transactions by category with total amount spent per category.
Expected Output:
javascript
{
  food: {transactions: 3, total: 225},
  utilities: {transactions: 2, total: 125},
  entertainment: {transactions: 2, total: 45}
}
Question 3: Build Inventory Summary from Orders
Context: Warehouse system needs to calculate total units sold and revenue per product from order data.
Input:
javascript
[
  {orderId: "ORD001", product: "Laptop", units: 2, pricePerUnit: 999},
  {orderId: "ORD002", product: "Mouse", units: 5, pricePerUnit: 25},
  {orderId: "ORD003", product: "Laptop", units: 1, pricePerUnit: 999},
  {orderId: "ORD004", product: "Keyboard", units: 3, pricePerUnit: 75},
  {orderId: "ORD005", product: "Mouse", units: 2, pricePerUnit: 25},
  {orderId: "ORD006", product: "Laptop", units: 1, pricePerUnit: 999}
]
Your Task: Use reduce to create summary object with totalUnitsSold and totalRevenue for each product.
Expected Output:
javascript
{
  Laptop: {totalUnitsSold: 4, totalRevenue: 3996},
  Mouse: {totalUnitsSold: 7, totalRevenue: 175},
  Keyboard: {totalUnitsSold: 3, totalRevenue: 225}
}
Question 4: Calculate Employee Payroll by Department
Context: HR system calculating total payroll, average salary, and employee count per department.
Input:
javascript
[
  {name: "Alice", department: "Engineering", salary: 95000},
  {name: "Bob", department: "Sales", salary: 65000},
  {name: "Charlie", department: "Engineering", salary: 105000},
  {name: "Diana", department: "Marketing", salary: 70000},
  {name: "Eve", department: "Sales", salary: 68000},
  {name: "Frank", department: "Engineering", salary: 88000},
  {name: "Grace", department: "Marketing", salary: 72000}
]
Your Task: Use reduce to calculate for each department: employeeCount, totalPayroll, and averageSalary.
Expected Output:
javascript
{
  Engineering: {employeeCount: 3, totalPayroll: 288000, averageSalary: 96000},
  Sales: {employeeCount: 2, totalPayroll: 133000, averageSalary: 66500},
  Marketing: {employeeCount: 2, totalPayroll: 142000, averageSalary: 71000}
}
Question 5: Flatten Nested Order Structure
Context: E-commerce API returns nested orders. You need a flat array of all individual items across all orders.
Input:
javascript
[
  {
    orderId: "ORD001",
    customer: "John",
    items: [
      {productId: "P1", name: "Laptop", price: 999},
      {productId: "P2", name: "Mouse", price: 25}
    ]
  },
  {
    orderId: "ORD002",
    customer: "Sarah",
    items: [
      {productId: "P3", name: "Keyboard", price: 75}
    ]
  },
  {
    orderId: "ORD003",
    customer: "Mike",
    items: [
      {productId: "P1", name: "Laptop", price: 999},
      {productId: "P4", name: "Monitor", price: 300}
    ]
  }
]
Your Task: Use reduce to create a flat array of all items with orderId and customer added to each item.
Expected Output:
javascript
[
  {orderId: "ORD001", customer: "John", productId: "P1", name: "Laptop", price: 999},
  {orderId: "ORD001", customer: "John", productId: "P2", name: "Mouse", price: 25},
  {orderId: "ORD002", customer: "Sarah", productId: "P3", name: "Keyboard", price: 75},
  {orderId: "ORD003", customer: "Mike", productId: "P1", name: "Laptop", price: 999},
  {orderId: "ORD003", customer: "Mike", productId: "P4", name: "Monitor", price: 300}
]
Question 6: Student Grade Analytics
Context: Educational platform needs comprehensive analytics: total students, average score, pass rate (>=60), grade distribution.
Input:
javascript
[
  {name: "Alice", score: 85},
  {name: "Bob", score: 58},
  {name: "Charlie", score: 92},
  {name: "Diana", score: 73},
  {name: "Eve", score: 45},
  {name: "Frank", score: 67},
  {name: "Grace", score: 88},
  {name: "Henry", score: 54}
]
Your Task: Use reduce to calculate totalStudents, averageScore, passRate (percentage scoring >= 60), and gradeDistribution (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: <60).
Expected Output:
javascript
{
  totalStudents: 8,
  averageScore: 70.25,
  passRate: 62.5,
  gradeDistribution: {A: 1, B: 2, C: 2, D: 1, F: 2}
}
Question 7: API Response Aggregation
Context: Microservices architecture returns user data from multiple services. Merge into single user profiles.
Input:
javascript
[
  {userId: "U001", service: "auth", data: {email: "alice@example.com", lastLogin: "2026-01-20"}},
  {userId: "U002", service: "auth", data: {email: "bob@example.com", lastLogin: "2026-01-22"}},
  {userId: "U001", service: "profile", data: {name: "Alice Johnson", age: 28}},
  {userId: "U001", service: "orders", data: {totalOrders: 15, totalSpent: 1250}},
  {userId: "U002", service: "profile", data: {name: "Bob Smith", age: 35}},
  {userId: "U002", service: "orders", data: {totalOrders: 8, totalSpent: 650}}
]
Your Task: Use reduce to merge all data for each userId into single user objects.
Expected Output:
javascript
{
  U001: {
    userId: "U001",
    email: "alice@example.com",
    lastLogin: "2026-01-20",
    name: "Alice Johnson",
    age: 28,
    totalOrders: 15,
    totalSpent: 1250
  },
  U002: {
    userId: "U002",
    email: "bob@example.com",
    lastLogin: "2026-01-22",
    name: "Bob Smith",
    age: 35,
    totalOrders: 8,
    totalSpent: 650
  }
}
Question 8: Time Series Data Aggregation
Context: IoT sensor data needs to be aggregated by hour with min, max, average temperature readings.
Input:
javascript
[
  {timestamp: "2026-01-25 14:00", temperature: 22.5},
  {timestamp: "2026-01-25 14:15", temperature: 23.1},
  {timestamp: "2026-01-25 14:30", temperature: 22.8},
  {timestamp: "2026-01-25 15:00", temperature: 24.2},
  {timestamp: "2026-01-25 15:15", temperature: 24.5},
  {timestamp: "2026-01-25 15:30", temperature: 24.0},
  {timestamp: "2026-01-25 16:00", temperature: 23.5},
  {timestamp: "2026-01-25 16:15", temperature: 23.2}
]
Your Task: Use reduce to group by hour and calculate min, max, average, and readingCount for each hour.
Expected Output:
javascript
{
  "14:00": {min: 22.5, max: 23.1, average: 22.8, readingCount: 3},
  "15:00": {min: 24.0, max: 24.5, average: 24.23, readingCount: 3},
  "16:00": {min: 23.2, max: 23.5, average: 23.35, readingCount: 2}
}
Question 9: Product Review Analysis
Context: E-commerce product page needs review statistics: rating distribution, average rating, total reviews, and sentiment breakdown.
Input:
javascript
[
  {reviewId: "R001", rating: 5, sentiment: "positive", verified: true},
  {reviewId: "R002", rating: 4, sentiment: "positive", verified: true},
  {reviewId: "R003", rating: 2, sentiment: "negative", verified: false},
  {reviewId: "R004", rating: 5, sentiment: "positive", verified: true},
  {reviewId: "R005", rating: 3, sentiment: "neutral", verified: true},
  {reviewId: "R006", rating: 1, sentiment: "negative", verified: true},
  {reviewId: "R007", rating: 4, sentiment: "positive", verified: false},
  {reviewId: "R008", rating: 5, sentiment: "positive", verified: true}
]
Your Task: Use reduce to calculate totalReviews, averageRating, ratingDistribution (count per rating 1-5), verifiedPercentage, and sentimentBreakdown (count per sentiment).
Expected Output:
javascript
{
  totalReviews: 8,
  averageRating: 3.625,
  ratingDistribution: {1: 1, 2: 1, 3: 1, 4: 2, 5: 3},
  verifiedPercentage: 75,
  sentimentBreakdown: {positive: 5, neutral: 1, negative: 2}
}
Question 10: Complex Sales Report
Context: Sales dashboard needs comprehensive metrics: total revenue, revenue by region, top performing salesperson per region, and monthly trends.
Input:
javascript
[
  {salesperson: "Alice", region: "North", amount: 5000, month: "Jan"},
  {salesperson: "Bob", region: "South", amount: 3000, month: "Jan"},
  {salesperson: "Alice", region: "North", amount: 5500, month: "Feb"},
  {salesperson: "Charlie", region: "North", amount: 4500, month: "Jan"},
  {salesperson: "Bob", region: "South", amount: 3500, month: "Feb"},
  {salesperson: "Diana", region: "East", amount: 6000, month: "Jan"},
  {salesperson: "Charlie", region: "North", amount: 4800, month: "Feb"},
  {salesperson: "Diana", region: "East", amount: 6500, month: "Feb"}
]
Your Task: Use reduce to calculate totalRevenue, revenueByRegion (total per region), topSalespersonByRegion (person with highest total in each region), and monthlyRevenue (total per month).
Expected Output:
javascript
{
  totalRevenue: 39300,
  revenueByRegion: {
    North: 20300,
    South: 6500,
    East: 12500
  },
  topSalespersonByRegion: {
    North: {name: "Alice", total: 10500},
    South: {name: "Bob", total: 6500},
    East: {name: "Diana", total: 12500}
  },
  monthlyRevenue: {
    Jan: 18500,
    Feb: 20800
  }
}







