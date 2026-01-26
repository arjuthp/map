console.log(`Question 15: Filter Valid Email Addresses
Context: You need to validate and filter email addresses that contain "@" and "." characters.
Input:`)



// Your Task: Use filter to get only strings that contain both "@" and ".".
// Expected Output:


// javascript
// [
//   "john@example.com",
//   "sarah@test.co",
//   "emma@company.org"
// ]


const userEmails =[ 
  "john@example.com",
  "invalid-email",
  "sarah@test.co",
  "notemail.com",
  "mike@domain",
  "emma@company.org"
]

const validEmails = userEmails.filter((input)=> input.includes("@") && input.includes("."));
console.log(validEmails);