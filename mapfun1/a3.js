console.log(`Question 3: Extract Ages from User Objects`)
// Context: You have an array of user objects and need only their ages for a chart.
// Input:
// javascript
// [
//   {name: "John", age: 25},
//   {name: "Sarah", age: 30},
//   {name: "Mike", age: 22}
// ]
// Your Task: Use map to create an array of just the ages.
// Expected Output:
// javascript
// [25, 30, 22]


const userDetails = [
    { name: "John", age: 25},
    {name: "Sarah", age: 30},
    {name:"Mike", age: 22}
]

const result = userDetails.map((user) => user.age);
console.log(result);
// const result = userDetails.map((user) => {
//     console.log(`${user.name} is ${user.age} years old`);
//     return user.age;
// });
console.log(result);
