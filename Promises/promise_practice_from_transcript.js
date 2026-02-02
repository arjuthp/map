// JavaScript Promises - Practice based on YouTube Transcript
// Following the step-by-step approach from the tutorial

console.log("=== Promise Practice from Transcript ===");

// Promise 1 - Basic Promise Creation
console.log("\n--- Promise 1: Basic Promise ---");
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task complete");
        resolve();
    }, 1000);
});

promise1.then(() => {
    console.log("Promise consumed");
});

// Promise 2 - Promise with data passing 
console.log("\n--- Promise 2: Promise with Data ---");
 new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 complete");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 result");
});

// Promise 3 - Promise with data passing to .then()
console.log("\n--- Promise 3: Passing Data ---");
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: "chai",
            email: "chai@example.com"
        });
    }, 1000);
});

promise3.then((user) => {
    console.log(user);
});

// Promise 4 - Promise with error handling
console.log("\n--- Promise 4: Error Handling ---");
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // Change to false to see success case
        if (!error) {
            resolve({
                username: "hitesh",
                password: "123"
            });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promise4
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    });

// Promise 5 - Using async/await
console.log("\n--- Promise 5: Async/Await ---");
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false; // Change to true to see error case
        if (!error) {
            resolve({
                username: "javascript",
                password: "123"
            });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

async function consumePromise5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5();

// Fetch API example (as mentioned in transcript)
console.log("\n--- Fetch API Example ---");
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();

// Alternative fetch with .then/.catch
console.log("\n--- Fetch with .then/.catch ---");
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Fetch operation completed");
    });