console.log(`Question 1: Filter Eligible Loan Applicants`)
// Context: A bank needs to filter loan applicants who meet all criteria: credit score >= 650, annual income >= $40,000, and no existing defaults.
// Input:
// javascript

console.log(`Your Task: Use filter to get applicants who qualify (creditScore >= 650 AND income >= 40000 AND hasDefaults === false).`)
// Expected Output:
// javascript
// [
//   {name: "Alice Johnson", creditScore: 720, income: 55000, hasDefaults: false},
//   {name: "Diana Prince", creditScore: 750, income: 80000, hasDefaults: false},
//   {name: "Frank Miller", creditScore: 690, income: 50000, hasDefaults: false}
// ]

const applicants = [
  {name: "Alice Johnson", creditScore: 720, income: 55000, hasDefaults: false},
  {name: "Bob Smith", creditScore: 680, income: 45000, hasDefaults: true},
  {name: "Charlie Brown", creditScore: 600, income: 60000, hasDefaults: false},
  {name: "Diana Prince", creditScore: 750, income: 80000, hasDefaults: false},
  {name: "Eve Davis", creditScore: 670, income: 35000, hasDefaults: false},
  {name: "Frank Miller", creditScore: 690, income: 50000, hasDefaults: false}
]

const qualifiedApplicants = applicants.filter ((user) => (user.creditScore >=650 && user.income >= 40000 && user.hasDefaults === false ));
console.log (qualifiedApplicants);