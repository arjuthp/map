console.log(`Question 11: Filter Passed Students
Context: You need to filter students who passed the exam (score >= 50) and also attended more than 75% classes.`)
// Input:


// javascript

// Your Task: Use filter to get students with score >= 50 AND attendance > 75.
// Expected Output:


// javascript
// [
//   {name: "Alice", score: 85, attendance: 80},
//   {name: "Diana", score: 92, attendance: 85}
// ]

const students = [
  {name: "Alice", score: 85, attendance: 80},
  {name: "Bob", score: 45, attendance: 90},
  {name: "Charlie", score: 70, attendance: 70},
  {name: "Diana", score: 92, attendance: 85},
  {name: "Eve", score: 55, attendance: 60}
]

const filteredStudents = students.filter((student) => student.score >= 50 && student.attendance > 75);
console.log(filteredStudents);
