// Q1: Convert promise to async/await
console.log("Q1: Convert this promise code to async/await");
// Promise version:
function getUserPromise(id) {
    return fetch("https://api.github.com/users/arjuthp")
        .then(response => response.json())
        .then(user => console.log(user));
}
// Async/await version:
// async function getUserAsync(id) {
//     // Your code here
// }

async function getUserAsync(id) {
    const response = await fetch ("https://api.github.com/users/arjuthp");
    const user = await response.json();
    console.log(user);
}
getUserAsync(1);