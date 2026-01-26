console.log(`Question 9: Filter Eligible Scholarship Students`);
// Context: University scholarship criteria: GPA >= 3.5, family income < $50,000, enrolled in at least 12 credit hours, and no disciplinary actions.
// Input:
// javascript

// Your Task: Use filter to get students where gpa >= 3.5 AND familyIncome < 50000 AND credits >= 12 AND disciplinary === false.
// Expected Output:
// javascript
// [
//   {name: "Emma Wilson", gpa: 3.8, familyIncome: 45000, credits: 15, disciplinary: false},
//   {name: "Ava Martinez", gpa: 3.7, familyIncome: 48000, credits: 18, disciplinary: false},
//   {name: "Mason Lee", gpa: 3.85, familyIncome: 40000, credits: 15, disciplinary: false}
// ]

const studentDetails = [
  {name: "Emma Wilson", gpa: 3.8, familyIncome: 45000, credits: 15, disciplinary: false},
  {name: "Noah Brown", gpa: 3.6, familyIncome: 55000, credits: 16, disciplinary: false},
  {name: "Olivia Davis", gpa: 3.9, familyIncome: 38000, credits: 12, disciplinary: true},
  {name: "Liam Johnson", gpa: 3.4, familyIncome: 42000, credits: 14, disciplinary: false},
  {name: "Ava Martinez", gpa: 3.7, familyIncome: 48000, credits: 18, disciplinary: false},
  {name: "Sophia Garcia", gpa: 3.5, familyIncome: 35000, credits: 10, disciplinary: false},
  {name: "Mason Lee", gpa: 3.85, familyIncome: 40000, credits: 15, disciplinary: false}
]

const eligibleStudents = studentDetails.filter ((student)=> student.gpa >= 3.5 && student.familyIncome < 50000 && student.credits >= 12 && student.disciplinary === false  );
console.log(eligibleStudents);