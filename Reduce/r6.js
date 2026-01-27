// Question 6: Student Grade Analytics
// Context: Educational platform needs comprehensive analytics: total students, average score, pass rate (>=60), grade distribution.
// Input:
// javascript

// Your Task: Use reduce to calculate totalStudents, averageScore, passRate (percentage scoring >= 60), and gradeDistribution (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: <60).
// Expected Output:
// javascript
// {
//   totalStudents: 8,
//   averageScore: 70.25,
//   passRate: 62.5,
//   gradeDistribution: {A: 1, B: 2, C: 2, D: 1, F: 2}

const studentGrades = [
  {name: "Alice", score: 85},
  {name: "Bob", score: 58},
  {name: "Charlie", score: 92},
  {name: "Diana", score: 73},
  {name: "Eve", score: 45},
  {name: "Frank", score: 67},
  {name: "Grace", score: 88},
  {name: "Henry", score: 54}
]

let totalScore = 0;
let passCount = 0;
const studentAnalytics = studentGrades.reduce((accum, category)=>{
  accum.totalStudents += 1;
  totalScore += category.score;
  accum.averageScore = totalScore/ accum.totalStudents;
  if(category.score >= 60){
    passCount += 1;
  }
  accum.passRate =( passCount/ accum.totalStudents)*100;
  let grade = category.score >= 90 ? 'A': category.score >=80 ? 'B': category.score >=70 ? 'C' : category.score >=60 ? 'D': 'F';
  accum.garadeDistribution[grade] += 1;
  return accum; 

},{totalStudents: 0, averageScore: 0, passRate: 0, garadeDistribution: {A : 0, B : 0,C : 0,D : 0, F:0 }});
console.log(studentAnalytics);