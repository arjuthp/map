
console.log(`Question 5: Get Adults (Age > 18)`)
// Context: You need to filter a list of users to show only adults for a voting registration system.
// Input:


// javascript

// Your Task: Use filter to get users with age greater than 18.
// Expected Output:


// javascript
// [
//   {name: "John", age: 25},
//   {name: "Mike", age: 30},
//   {name: "Tom", age: 22}
// ]

const users = [
  {name: "John", age: 25},
  {name: "Sarah", age: 16},
  {name: "Mike", age: 30},
  {name: "Emma", age: 15},
  {name: "Tom", age: 22}
]

const filteredUsers = users.filter((user) => user.age >= 18);
console.log(filteredUsers);