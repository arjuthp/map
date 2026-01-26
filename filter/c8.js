
console.log (`Question 8: Filter Objects with Email Property`)
// Context: Some user records are incomplete. You need only users who have an email address.
// Input:


// javascript

// Your Task: Use filter to get users who have an email property.
// Expected Output:


// javascript
// [
//   {name: "John", email: "john@example.com"},
//   {name: "Mike", email: "mike@example.com"},
//   {name: "Tom", email: "tom@example.com"}
// ]
 const userRecords = [
  {name: "John", email: "john@example.com"},
  {name: "Sarah"},
  {name: "Mike", email: "mike@example.com"},
  {name: "Emma"},
  {name: "Tom", email: "tom@example.com"}
]

const filteredUsers = userRecords.filter((data) => data.email );
console.log(filteredUsers);