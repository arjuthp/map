console.log(`Question 4: Calculate Employee Payroll by Department`)
// Context: HR system calculating total payroll, average salary, and employee count per department.
// Input:
// javascript

// Your Task: Use reduce to calculate for each department: employeeCount, totalPayroll, and averageSalary.
// Expected Output:
// javascript
// {
//   Engineering: {employeeCount: 3, totalPayroll: 288000, averageSalary: 96000},
//   Sales: {employeeCount: 2, totalPayroll: 133000, averageSalary: 66500},
//   Marketing: {employeeCount: 2, totalPayroll: 142000, averageSalary: 71000}
// }

const employeeDetails = [
  {name: "Alice", department: "Engineering", salary: 95000},
  {name: "Bob", department: "Sales", salary: 65000},
  {name: "Charlie", department: "Engineering", salary: 105000},
  {name: "Diana", department: "Marketing", salary: 70000},
  {name: "Eve", department: "Sales", salary: 68000},
  {name: "Frank", department: "Engineering", salary: 88000},
  {name: "Grace", department: "Marketing", salary: 72000}
]

const reducedEmployees = employeeDetails.reduce((count, value)=>{
    const key = value.department;
    if(!count[key]){
        count[key] = { employeeCount: 0, totalPayroll: 0, averageSalary: 0};
    }
    count[key].employeeCount += 1;
    count[key].totalPayroll += value.salary;
    count[key].averageSalary = count[key].totalPayroll/ count[key].employeeCount ;
    return count;
},{});
console.log(reducedEmployees);