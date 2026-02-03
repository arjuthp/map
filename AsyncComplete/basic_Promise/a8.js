// Q8: Transform data in chain
console.log("\nQ8: Fetch user → extract name → convert to uppercase");
// function fetchUser() {
//     return Promise.resolve({ id: 1, name: "alice" });
// }
// Chain and transform:

const user_id = "https://api.github.com/users/arjuthp";

fetch(user_id)
    .then(response => {
        if (!response.ok) throw new Error('User not found');
        return response.json();
    })
    .then(user => user.name)
    .then(name => name.toUpperCase())
    .then(upperName => console.log("Result:", upperName))
    .catch(error => console.log("Error:", error.message));





