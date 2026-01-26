console.log(`Question 6: Create Full Names`)
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

const users = [
  {firstName: "John", lastName: "Doe"},
  {firstName: "Jane", lastName: "Smith"},
  {firstName: "Bob", lastName: "Johnson"}
]

const fullNames = users.map ((user) => `${user.firstName} ${user.lastName}`) ;
console.log(fullNames);