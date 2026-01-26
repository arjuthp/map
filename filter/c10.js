console.log(`Question 10: Filter with Multiple Conditions
Context: You need active users who are also adults for sending marketing emails.
// `)
// Input:


// javascript

// Your Task: Use filter to get users where age > 18 AND isActive === true.
// Expected Output:


// javascript
// [
//   {name: "John", age: 25, isActive: true},
//   {name: "Emma", age: 22, isActive: true}
// ]

const users = [
  {name: "John", age: 25, isActive: true},
  {name: "Sarah", age: 16, isActive: true},
  {name: "Mike", age: 30, isActive: false},
  {name: "Emma", age: 22, isActive: true},
  {name: "Tom", age: 17, isActive: false}
]
const adultUsers = users.filter((user) => user.age > 18 && user.isActive);
console.log(adultUsers);