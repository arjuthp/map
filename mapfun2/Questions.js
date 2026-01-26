// // [
// //   {name: "Laptop", price: 1000, discount: 10},
// //   {name: "Phone", price: 500, discount: 15},
// //   {name: "Tablet", price: 300, discount: 20},
// //   {name: "Watch", price: 200, discount: 5}
// // ]
// // Your Task: Use map to calculate the final price after applying the discount percentage.
// // Expected Output:
// // javascript
// // [
// //   {name: "Laptop", originalPrice: 1000, finalPrice: 900},
// //   {name: "Phone", originalPrice: 500, finalPrice: 425},
// //   {name: "Tablet", originalPrice: 300, finalPrice: 240},
// //   {name: "Watch", originalPrice: 200, finalPrice: 190}
// // ]
// Solution:
// javascript
// const products = [
//   {name: "Laptop", price: 1000, discount: 10},
//   {name: "Phone", price: 500, discount: 15},
//   {name: "Tablet", price: 300, discount: 20},
//   {name: "Watch", price: 200, discount: 5}
// ];

// const discountedProducts = products.map(product => ({
//   name: product.name,
//   originalPrice: product.price,
//   finalPrice: product.price - (product.price * product.discount / 100)
// }));

// console.log(discountedProducts);
// // Question 12: Transform User Data for API
// // Context: Your backend API expects user data in a different format than your frontend form. You need to transform the data before sending.
// // Input:
// // javascript
// // [
// //   {firstName: "John", lastName: "Doe", email: "john@example.com", age: 25},
// //   {firstName: "Jane", lastName: "Smith", email: "jane@example.com", age: 30},
// //   {firstName: "Bob", lastName: "Wilson", email: "bob@example.com", age: 28}
// // ]
// // Your Task: Use map to transform to API format with fullName, contactEmail, and isAdult properties.
// // Expected Output:
// // javascript
// // [
// //   {fullName: "John Doe", contactEmail: "john@example.com", isAdult: true},
// //   {fullName: "Jane Smith", contactEmail: "jane@example.com", isAdult: true},
// //   {fullName: "Bob Wilson", contactEmail: "bob@example.com", isAdult: true}
// // ]
// Solution:
// javascript
// const users = [
//   {firstName: "John", lastName: "Doe", email: "john@example.com", age: 25},
//   {firstName: "Jane", lastName: "Smith", email: "jane@example.com", age: 30},
//   {firstName: "Bob", lastName: "Wilson", email: "bob@example.com", age: 28}
// ];

// const apiFormat = users.map(user => ({
//   fullName: `${user.firstName} ${user.lastName}`,
//   contactEmail: user.email,
//   isAdult: user.age >= 18
// }));

// console.log(apiFormat);
// Question 13: Add Index and Format Array Items
// Context: You're creating a numbered list for display. You need to add position numbers and format each item.
// Input:
// javascript
// ["Learn JavaScript", "Build a project", "Deploy to production", "Get feedback"]
// Your Task: Use map (with index parameter) to create formatted strings like "1. Learn JavaScript", "2. Build a project", etc.
// Expected Output:
// javascript
// [
//   "1. Learn JavaScript",
//   "2. Build a project",
//   "3. Deploy to production",
//   "4. Get feedback"
// ]
// Solution:
// javascript
// const tasks = ["Learn JavaScript", "Build a project", "Deploy to production", "Get feedback"];

// const numberedTasks = tasks.map((task, index) => `${index + 1}. ${task}`);

// console.log(numberedTasks);
// // ["1. Learn JavaScript", "2. Build a project", "3. Deploy to production", "4. Get feedback"]
// Question 14: Calculate Age from Birth Year
// Context: You have users with birth years and need to calculate their current age and categorize them.
// Input:
// javascript
// [
//   {name: "Alice", birthYear: 1990},
//   {name: "Bob", birthYear: 2005},
//   {name: "Charlie", birthYear: 1985},
//   {name: "Diana", birthYear: 2010}
// ]
// Current Year: 2026
// Your Task: Use map to add age and ageGroup (Child: <18, Adult: 18-59, Senior: 60+).
// Expected Output:
// javascript
// [
//   {name: "Alice", birthYear: 1990, age: 36, ageGroup: "Adult"},
//   {name: "Bob", birthYear: 2005, age: 21, ageGroup: "Adult"},
//   {name: "Charlie", birthYear: 1985, age: 41, ageGroup: "Adult"},
//   {name: "Diana", birthYear: 2010, age: 16, ageGroup: "Child"}
// ]
// Solution:
// javascript
// const users = [
//   {name: "Alice", birthYear: 1990},
//   {name: "Bob", birthYear: 2005},
//   {name: "Charlie", birthYear: 1985},
//   {name: "Diana", birthYear: 2010}
// ];

// const currentYear = 2026;

// const usersWithAge = users.map(user => {
//   const age = currentYear - user.birthYear;
//   let ageGroup;
  
//   if (age < 18) {
//     ageGroup = "Child";
//   } else if (age < 60) {
//     ageGroup = "Adult";
//   } else {
//     ageGroup = "Senior";
//   }
  
//   return {
//     ...user,
//     age: age,
//     ageGroup: ageGroup
//   };
// });

// console.log(usersWithAge);
// Question 15: Parse and Transform URL Parameters
// Context: You have an array of URL strings and need to extract specific information from each URL.
// Input:
// javascript
// [
//   "https://example.com/product/123",
//   "https://example.com/product/456",
//   "https://example.com/product/789",
//   "https://example.com/product/321"
// ]
// Your Task: Use map to extract product IDs and create objects with id and productUrl.
// Expected Output:
// javascript
// [
//   {id: "123", productUrl: "https://example.com/product/123"},
//   {id: "456", productUrl: "https://example.com/product/456"},
//   {id: "789", productUrl: "https://example.com/product/789"},
//   {id: "321", productUrl: "https://example.com/product/321"}
// ]




