// Q8: Async map - Process array in parallel
console.log("\nQ8: Fetch multiple users in parallel");
const ids = [1, 2, 3, 4, 5];
// async function fetchAllUsers(ids) {
//     // Fetch all users at once (parallel)
//     // Return array of users
// }

const fetchUser = (id) => new Promise(res => setTimeout(() => res({id, name: `User${id}`}), 1000));

const fetchAllUsers = (ids) => Promise.all(ids.map(fetchUser));
fetchAllUsers([1,2,3,4,5]).then(console.log);