// Q3: Create a function that returns a promise
console.log("\nQ3: Create fetchUser(id) that returns promise");
// function fetchUser(id) {
//     // Return promise that resolves with user object after 1s
// }
// fetchUser(1).then(user => console.log(user));

const user_Id =  "https://api.github.com/users/arjuthp"

fetch(user_Id).then(response => {
    if(!response.ok){
        throw new Error('User not found');
    }
    return response.json();
}).then(user => {
        console.log("Name:", user.name);
        console.log("Bio:", user.bio);
        console.log("Followers:", user.followers);
        console.log("Public Repos:", user.public_repos);
})
.catch(error => {
    console.log("Error:", error.message)
});




