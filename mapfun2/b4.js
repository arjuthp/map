// ["1. Learn JavaScript", "2. Build a project", "3. Deploy to production", "4. Get feedback"]
console.log(`Question 14: Calculate Age from Birth Year`)
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

const userDetails = [
  {name: "Alice", birthYear: 1990},
  {name: "Bob", birthYear: 2005},
  {name: "Charlie", birthYear: 1985},
  {name: "Diana", birthYear: 2010}
]

let CurrentYear = 2026;
const currentDetails = userDetails.map(user =>({
    name: user.name,
    birthYear: CurrentYear - user.birthYear,
    age: (CurrentYear - user.birthYear) > 18 ? "Child": (CurrentYear - user.birthYear) >= 60 ? "Senior": "Adult"
}) )
     
console.log(currentDetails);