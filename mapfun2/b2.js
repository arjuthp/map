console.log(`Question 12: Transform User Data for API`)
console.log(`Context: Your backend API expects user data in a different format than your frontend form. You need to transform the data before sending.`)
// Input:
// javascript((

console.log(`Your Task: Use map to transform to API format with fullName, contactEmail, and isAdult properties`)
// Expected Output:
// javascript
// [
//   {fullName: "John Doe", contactEmail: "john@example.com", isAdult: true},
//   {fullName: "Jane Smith", contactEmail: "jane@example.com", isAdult: true},
//   {fullName: "Bob Wilson", contactEmail: "bob@example.com", isAdult: true}
// ]

const userData = [
  {firstName: "John", lastName: "Doe", email: "john@example.com", age: 25},
  {firstName: "Jane", lastName: "Smith", email: "jane@example.com", age: 30},
  {firstName: "Bob", lastName: "Wilson", email: "bob@example.com", age: 28}
]


const backendData = userData.map(user => ({
   fullName: `${user.firstName} ${user.lastName}`,
   contactEmail: user.email,
   isAdult : user.age>=18
})
)

console.log(backendData);