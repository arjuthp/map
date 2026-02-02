// ============================================
// 03: PROMISES - The Modern Solution
// ============================================

/*
🎯 CORE CONCEPT:
A Promise is an object representing the eventual completion
or failure of an asynchronous operation.

🔑 KEY POINTS:
1. Promise has 3 states: pending → fulfilled OR rejected
2. Created with: new Promise((resolve, reject) => {})
3. Consumed with: .then() for success, .catch() for errors
4. Chainable: avoids callback hell
5. Immutable: once settled, state doesn't change
*/

console.log("=== PROMISE STATES ===\n");

// Pending: Initial state
const pending = new Promise((resolve, reject) => {
    // Not resolved or rejected yet
});
console.log("Pending:", pending);

// Fulfilled: Success
const fulfilled = Promise.resolve("Success! ✅");
console.log("Fulfilled:", fulfilled);

// Rejected: Failure
const rejected = Promise.reject("Error! ❌");
console.log("Rejected:", rejected);
rejected.catch(() => {}); // Prevent unhandled rejection

console.log("\n=== CREATING PROMISES ===\n");

// Basic promise structure
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve("Operation successful!"); // Fulfill
    } else {
        reject("Operation failed!"); // Reject
    }
});

// Consuming the promise
myPromise
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error));

console.log("\n=== ASYNC PROMISE ===\n");

function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching user ${userId}...`);
        
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: "Alice",
                    email: "alice@example.com"
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

fetchUser(1)
    .then(user => {
        console.log("User found:", user);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

console.log("\n=== PROMISE CHAINING ===\n");

// Avoid callback hell with chaining!
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: "John" });
        }, 500);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "Post 1" },
                { id: 2, title: "Post 2" }
            ]);
        }, 500);
    });
}

function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, text: "Great!" },
                { id: 2, text: "Nice!" }
            ]);
        }, 500);
    });
}

// Clean chain instead of nested callbacks!
getUser(1)
    .then(user => {
        console.log("User:", user.name);
        return getPosts(user.id); // Return next promise
    })
    .then(posts => {
        console.log("Posts:", posts.length);
        return getComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments.length);
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

console.log("\n=== ERROR HANDLING ===\n");

function riskyOperation(shouldFail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("Operation failed!"));
            } else {
                resolve("Success!");
            }
        }, 500);
    });
}

// .catch() handles any error in the chain
riskyOperation(false)
    .then(result => {
        console.log("Result:", result);
        return riskyOperation(true); // This will fail
    })
    .then(result => {
        console.log("This won't run");
    })
    .catch(error => {
        console.log("Caught error:", error.message);
    })
    .finally(() => {
        console.log("Cleanup: Always runs!");
    });

console.log("\n=== PROMISE METHODS ===\n");

// Promise.resolve() - Create fulfilled promise
const quick = Promise.resolve(42);
quick.then(value => console.log("Quick value:", value));

// Promise.reject() - Create rejected promise
const failed = Promise.reject(new Error("Failed!"));
failed.catch(err => console.log("Quick error:", err.message));

console.log("\n=== PRACTICE QUESTIONS ===\n");

// Q1: Create a simple promise
console.log("Q1: Create a promise that resolves after 1 second");

const q1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Hello from Q1!");
    }, 1000);
});

q1.then(msg => console.log(msg));

// Q2: Promise with condition
console.log("\nQ2: Resolve if even, reject if odd");

function checkEven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`${num} is even`);
        } else {
            reject(new Error(`${num} is odd`));
        }
    });
}

checkEven(4).then(msg => console.log(msg));
checkEven(5).catch(err => console.log(err.message));

// Q3: Promise chain
console.log("\nQ3: Chain operations");

Promise.resolve(5)
    .then(num => {
        console.log("Start:", num);
        return num * 2;
    })
    .then(num => {
        console.log("After *2:", num);
        return num + 10;
    })
    .then(num => {
        console.log("After +10:", num);
    });

// Q4: Convert callback to promise
console.log("\nQ4: Callback to Promise");

// Old callback style
function oldFetch(callback) {
    setTimeout(() => {
        callback(null, "Data");
    }, 500);
}

// New promise style
function newFetch() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data");
        }, 500);
    });
}

newFetch().then(data => console.log("Fetched:", data));

// Q5: Error recovery
console.log("\nQ5: Recover from errors");

Promise.reject("First error")
    .catch(err => {
        console.log("Caught:", err);
        return "Recovered!"; // Continue chain
    })
    .then(result => {
        console.log("Result:", result);
    });

console.log("\n=== REAL WORLD EXAMPLE ===\n");

// API simulation
function simulateAPI(endpoint, delay = 1000) {
    return new Promise((resolve, reject) => {
        console.log(`📡 Calling ${endpoint}...`);
        
        setTimeout(() => {
            const data = {
                '/users': [{ id: 1, name: 'Alice' }],
                '/posts': [{ id: 1, title: 'Hello' }],
                '/comments': [{ id: 1, text: 'Nice!' }]
            };
            
            if (data[endpoint]) {
                resolve(data[endpoint]);
            } else {
                reject(new Error(`404: ${endpoint} not found`));
            }
        }, delay);
    });
}

// Clean sequential calls
simulateAPI('/users')
    .then(users => {
        console.log('✅ Users:', users.length);
        return simulateAPI('/posts');
    })
    .then(posts => {
        console.log('✅ Posts:', posts.length);
        return simulateAPI('/comments');
    })
    .then(comments => {
        console.log('✅ Comments:', comments.length);
    })
    .catch(error => {
        console.log('❌ Error:', error.message);
    })
    .finally(() => {
        console.log('🏁 API calls complete');
    });

/*
🎓 SUMMARY:
1. Promises solve callback hell
2. Three states: pending, fulfilled, rejected
3. .then() for success, .catch() for errors
4. .finally() always runs
5. Chainable for sequential operations
6. Much cleaner than nested callbacks!
*/

console.log("\n=== YOUR TURN ===\n");

// 🏆 CHALLENGE: Create a user registration flow with promises
// 1. Validate email
// 2. Check if user exists
// 3. Save to database
// 4. Send welcome email
// Use promise chaining!

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email.includes('@')) {
                resolve(email);
            } else {
                reject(new Error('Invalid email'));
            }
        }, 500);
    });
}

// Add more functions and chain them!

/*
💡 NEXT FILE: 04_async_await.js
Learn the cleanest async syntax!
*/
