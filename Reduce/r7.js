console.log(`Question 7: API Response Aggregation`)
// Context: Microservices architecture returns user data from multiple services. Merge into single user profiles.
// Input:
// javascript

// Your Task: Use reduce to merge all data for each userId into single user objects.
// Expected Output:
// javascript
// {
//   U001: {
//     userId: "U001",
//     email: "alice@example.com",
//     lastLogin: "2026-01-20",
//     name: "Alice Johnson",
//     age: 28,
//     totalOrders: 15,
//     totalSpent: 1250
//   },
//   U002: {
//     userId: "U002",
//     email: "bob@example.com",
//     lastLogin: "2026-01-22",
//     name: "Bob Smith",
//     age: 35,
//     totalOrders: 8,
//     totalSpent: 650
//   }
// }

const userData = [
  {userId: "U001", service: "auth", data: {email: "alice@example.com", lastLogin: "2026-01-20"}},
  {userId: "U002", service: "auth", data: {email: "bob@example.com", lastLogin: "2026-01-22"}},
  {userId: "U001", service: "profile", data: {name: "Alice Johnson", age: 28}},
  {userId: "U001", service: "orders", data: {totalOrders: 15, totalSpent: 1250}},
  {userId: "U002", service: "profile", data: {name: "Bob Smith", age: 35}},
  {userId: "U002", service: "orders", data: {totalOrders: 8, totalSpent: 650}}
]

const reducedDetails = userData.reduce((accum, value)=>{
    const key = value.userId;
    if(!accum[key]){
            accum[key]= {
            userId: value.userId,
            email: "",
            lastLogin: "",
            name:"",
            age: 0,
            totalScore: 0 ,
            totalSpent: 0
        };      
    }
    Object.assign(accum[key],value.data);
    return accum;
},{} );
console.log(reducedDetails);