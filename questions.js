// Question 1: Double All Numbers
// Context: You have an array of numbers and need to double each one.
// Input:
// javascript
// [1, 2, 3, 4, 5]
// Your Task: Use map to double each number.
// Expected Output:
// javascript
// [2, 4, 6, 8, 10]
// Solution:
// javascript
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]

// Question 2: Convert Names to Uppercase
// Context: You have a list of names in lowercase and need to display them in uppercase.
// Input:
// javascript
// ["alice", "bob", "charlie"]
// Your Task: Use map to convert all names to uppercase.
// Expected Output:
// javascript
// ["ALICE", "BOB", "CHARLIE"]
// Solution:
// javascript
// const names = ["alice", "bob", "charlie"];
// const upperNames = names.map(name => name.toUpperCase());
// console.log(upperNames); // ["ALICE", "BOB", "CHARLIE"]
// Question 3: Extract Ages from User Objects
// Context: You have an array of user objects and need only their ages for a chart.
// Input:
// javascript
// [
//   {name: "John", age: 25},
//   {name: "Sarah", age: 30},
//   {name: "Mike", age: 22}
// ]
// Your Task: Use map to create an array of just the ages.
// Expected Output:
// javascript
// [25, 30, 22]
// Solution:
// javascript
// const users = [
//   {name: "John", age: 25},
//   {name: "Sarah", age: 30},
//   {name: "Mike", age: 22}
// ];
// const ages = users.map(user => user.age);
// console.log(ages); // [25, 30, 22]
// Question 4: Add Greeting Prefix
// Context: You're building a welcome message system that adds "Hello, " before each name.
// Input:
// javascript
// ["John", "Emma", "David"]
// Your Task: Use map to add "Hello, " before each name.
// Expected Output:
// javascript
// ["Hello, John", "Hello, Emma", "Hello, David"]
// Solution:
// javascript
// const names = ["John", "Emma", "David"];
// const greetings = names.map(name => "Hello, " + name);
// console.log(greetings); // ["Hello, John", "Hello, Emma", "Hello, David"]
// Question 5: Convert Celsius to Fahrenheit
// Context: You have temperatures in Celsius and need to convert them to Fahrenheit. Formula: (C × 9/5) + 32
// Input:
// javascript
// [0, 10, 20, 30, 100]
// Your Task: Use map to convert each temperature to Fahrenheit.
// Expected Output:
// javascript
// [32, 50, 68, 86, 212]
Solution:
javascript
const celsius = [0, 10, 20, 30, 100];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit); // [32, 50, 68, 86, 212]
// Question 6: Create Full Names
// Context: You have user objects with separate first and last names. You need full names for display.
// Input:
// javascript
// [
//   {firstName: "John", lastName: "Doe"},
//   {firstName: "Jane", lastName: "Smith"},
//   {firstName: "Bob", lastName: "Johnson"}
// ]
// Your Task: Use map to create an array of full names.
// Expected Output:
// javascript
// ["John Doe", "Jane Smith", "Bob Johnson"]
Solution:
javascript
const users = [
  {firstName: "John", lastName: "Doe"},
  {firstName: "Jane", lastName: "Smith"},
  {firstName: "Bob", lastName: "Johnson"}
];
const fullNames = users.map(user => user.firstName + " " + user.lastName);
console.log(fullNames); // ["John Doe", "Jane Smith", "Bob Johnson"]
Question 7: Format Prices with Currency
Context: You have product prices as numbers and need to format them as currency strings with $ and 2 decimal places.
Input:
javascript
[19.5, 25, 30.99, 100]
Your Task: Use map to format prices as "$XX.XX".
Expected Output:
javascript
["$19.50", "$25.00", "$30.99", "$100.00"]
Solution:
javascript
const prices = [19.5, 25, 30.99, 100];
const formattedPrices = prices.map(price => "$" + price.toFixed(2));
console.log(formattedPrices); // ["$19.50", "$25.00", "$30.99", "$100.00"]
Question 8: Extract Initials from Names
Context: You need to create initials (first letter of each word) from full names for user avatars.
Input:
javascript
["John Doe", "Jane Smith", "Bob Johnson"]
Your Task: Use map to extract initials from each name.
Expected Output:
javascript
["JD", "JS", "BJ"]
Solution:
javascript
const names = ["John Doe", "Jane Smith", "Bob Johnson"];
const initials = names.map(name => {
  const parts = name.split(" ");
  return parts[0][0] + parts[1][0];
});
console.log(initials); // ["JD", "JS", "BJ"]
Question 9: Convert Strings to Objects
Context: You have an array of words and need to create objects containing each word and its length.
Input:
javascript
["apple", "banana", "cherry"]
Your Task: Use map to create objects with 'value' and 'length' properties.
Expected Output:
javascript
[
  {value: "apple", length: 5},
  {value: "banana", length: 6},
  {value: "cherry", length: 6}
]
Solution:
javascript
const words = ["apple", "banana", "cherry"];
const wordObjects = words.map(word => ({
  value: word,
  length: word.length
}));
console.log(wordObjects);
// [{value: "apple", length: 5}, {value: "banana", length: 6}, {value: "cherry", length: 6}]
Question 10: Extract Nested Product Names
Context: You have an e-commerce API response with nested product data and need just the product names.
Input:
javascript
[
  {id: 1, product: {name: "Phone", price: 699}},
  {id: 2, product: {name: "Laptop", price: 1299}},
  {id: 3, product: {name: "Tablet", price: 499}}
]
Your Task: Use map to extract just the product names from the nested structure.
Expected Output:
javascript
["Phone", "Laptop", "Tablet"]
Solution:
javascript
const items = [
  {id: 1, product: {name: "Phone", price: 699}},
  {id: 2, product: {name: "Laptop", price: 1299}},
  {id: 3, product: {name: "Tablet", price: 499}}
];
const productNames = items.map(item => item.product.name);
console.log(productNames); // ["Phone", "Laptop", "Tablet"]







