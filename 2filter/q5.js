console.log(`Question 5: Filter Qualified Job Candidates`)
// Context: HR system filtering candidates for a senior developer position: minimum 5 years experience, knows either "React" or "Angular", available to start within 30 days, and expected salary <= $120,000.
// Input:
// javascript

// Your Task: Use filter to get candidates where experience >= 5 AND skills include "React" OR "Angular" AND availableInDays <= 30 AND expectedSalary <= 120000.
// Expected Output:
// javascript
// [
//   {name: "Alex Chen", experience: 7, skills: ["React", "Node.js"], availableInDays: 15, expectedSalary: 110000},
//   {name: "Sophie Martin", experience: 9, skills: ["React", "TypeScript"], availableInDays: 20, expectedSalary: 118000}
// ]

const candidates = [
  {name: "Alex Chen", experience: 7, skills: ["React", "Node.js"], availableInDays: 15, expectedSalary: 110000},
  {name: "Maria Garcia", experience: 4, skills: ["Angular", "TypeScript"], availableInDays: 20, expectedSalary: 95000},
  {name: "James Wilson", experience: 6, skills: ["Vue.js", "Python"], availableInDays: 10, expectedSalary: 105000},
  {name: "Lisa Anderson", experience: 8, skills: ["React", "GraphQL"], availableInDays: 45, expectedSalary: 115000},
  {name: "David Lee", experience: 5, skills: ["Angular", "Java"], availableInDays: 25, expectedSalary: 125000},
  {name: "Sophie Martin", experience: 9, skills: ["React", "TypeScript"], availableInDays: 20, expectedSalary: 118000}
]

const qualifiedCanditates = candidates.filter((applicants)=>(
    applicants.experience >= 5 &&
    (applicants.skills.includes("React") || applicants.skills.includes("Angular")) &&
    applicants.availableInDays <= 30 &&
    applicants.expectedSalary <=120000)
);
console.log(qualifiedCanditates);