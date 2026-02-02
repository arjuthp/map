// ============================================
// PRACTICE QUESTIONS: PROMISES
// ============================================

console.log("=== LEVEL 1: BASIC PROMISES ===\n");

// Q1: Create a promise that resolves with "Hello" after 1 second
console.log("Q1: Create promise that resolves with 'Hello' after 1s");
// const q1 = // Your code here
// q1.then(msg => console.log(msg));


// Q2: Create a promise that rejects with error "Failed" after 1 second
console.log("\nQ2: Create promise that rejects after 1s");
// const q2 = // Your code here
// q2.catch(err => console.log(err.message));


// Q3: Create a function that returns a promise
console.log("\nQ3: Create fetchUser(id) that returns promise");
// function fetchUser(id) {
//     // Return promise that resolves with user object after 1s
// }
// fetchUser(1).then(user => console.log(user));


// Q4: Handle both success and error
console.log("\nQ4: Create divide(a, b) that rejects if b is 0");
// function divide(a, b) {
//     // Your code here
// }
// divide(10, 2).then(result => console.log(result));
// divide(10, 0).catch(err => console.log(err.message));


// Q5: Use Promise.resolve and Promise.reject
console.log("\nQ5: Create checkAge(age) using Promise.resolve/reject");
// function checkAge(age) {
//     // Resolve if age >= 18, reject otherwise
// }
// checkAge(20).then(msg => console.log(msg));
// checkAge(15).catch(err => console.log(err));


console.log("\n=== LEVEL 2: PROMISE CHAINING ===\n");

// Q6: Chain three operations
console.log("Q6: Chain: start with 5 → multiply by 2 → add 10 → log result");
// Promise.resolve(5)
//     // Your code here


// Q7: Chain with async operations
console.log("\nQ7: Chain: getUser → getPosts → getComments");
// function getUser(id) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id, name: "Alice" }), 500);
//     });
// }
// function getPosts(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 500);
//     });
// }
// function getComments(postId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve([{ id: 1, text: "Nice!" }]), 500);
//     });
// }
// Chain them:


// Q8: Transform data in chain
console.log("\nQ8: Fetch user → extract name → convert to uppercase");
// function fetchUser() {
//     return Promise.resolve({ id: 1, name: "alice" });
// }
// Chain and transform:


// Q9: Error in chain
console.log("\nQ9: Handle error in the middle of chain");
// Promise.resolve(5)
//     .then(n => n * 2)
//     .then(n => {
//         if (n > 5) throw new Error("Too big!");
//         return n;
//     })
//     .then(n => n + 10)
//     // Handle error here


// Q10: Recover from error
console.log("\nQ10: Recover from error and continue chain");
// Promise.reject("Error!")
//     // Catch and recover
//     // Continue chain


console.log("\n=== LEVEL 3: PROMISE METHODS ===\n");

// Q11: Use Promise.all
console.log("Q11: Wait for 3 promises to complete");
// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);
// Use Promise.all:


// Q12: Use Promise.race
console.log("\nQ12: Race between 3 promises");
// const slow = new Promise(resolve => setTimeout(() => resolve("slow"), 2000));
// const medium = new Promise(resolve => setTimeout(() => resolve("medium"), 1000));
// const fast = new Promise(resolve => setTimeout(() => resolve("fast"), 500));
// Use Promise.race:


// Q13: Use Promise.allSettled
console.log("\nQ13: Wait for all promises (even if some fail)");
// const success = Promise.resolve("Success");
// const failure = Promise.reject("Failed");
// const pending = new Promise(resolve => setTimeout(() => resolve("Done"), 1000));
// Use Promise.allSettled:


// Q14: Use Promise.any
console.log("\nQ14: Get first successful promise");
// const fail1 = Promise.reject("Error 1");
// const fail2 = Promise.reject("Error 2");
// const success = new Promise(resolve => setTimeout(() => resolve("Success!"), 1000));
// Use Promise.any:


// Q15: Parallel vs Sequential
console.log("\nQ15: Run 3 API calls in parallel (not sequential)");
// function apiCall(id) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(`Data ${id}`), 1000);
//     });
// }
// Run apiCall(1), apiCall(2), apiCall(3) in parallel:


console.log("\n=== LEVEL 4: REAL WORLD ===\n");

// Q16: Convert callback to promise
console.log("Q16: Convert this callback function to promise");
function oldReadFile(filename, callback) {
    setTimeout(() => {
        callback(null, `Content of ${filename}`);
    }, 1000);
}
// function newReadFile(filename) {
//     // Your code here - return promise
// }


// Q17: Create a retry function
console.log("\nQ17: Create retry(fn, maxAttempts) with promises");
// function retry(fn, maxAttempts) {
//     // Your code here
// }
// Test:
// function flaky() {
//     return Math.random() > 0.7 
//         ? Promise.resolve("Success!") 
//         : Promise.reject("Failed");
// }
// retry(flaky, 5).then(console.log).catch(console.log);


// Q18: Create a timeout wrapper
console.log("\nQ18: Create timeout(promise, ms) that rejects if too slow");
// function timeout(promise, ms) {
//     // Your code here
// }
// Test:
// const slow = new Promise(resolve => setTimeout(() => resolve("Done"), 3000));
// timeout(slow, 2000).catch(err => console.log(err.message));


// Q19: Batch API calls
console.log("\nQ19: Process array of IDs in batches of 3");
// function fetchUser(id) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id, name: `User${id}` }), 1000);
//     });
// }
// const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Process in batches of 3:


// Q20: Implement Promise.all manually
console.log("\nQ20: Implement your own Promise.all");
// function myPromiseAll(promises) {
//     // Your code here
// }
// Test:
// myPromiseAll([
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3)
// ]).then(console.log);


console.log("\n=== LEVEL 5: ADVANCED PATTERNS ===\n");

// Q21: Sequential execution
console.log("Q21: Execute promises sequentially (one after another)");
// const tasks = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 1000)),
//     () => new Promise(resolve => setTimeout(() => resolve(2), 1000)),
//     () => new Promise(resolve => setTimeout(() => resolve(3), 1000))
// ];
// Execute sequentially:


// Q22: Promise pool (limit concurrency)
console.log("\nQ22: Run max 2 promises at a time");
// function promisePool(tasks, limit) {
//     // Your code here
// }


// Q23: Debounce with promises
console.log("\nQ23: Create debounced promise function");
// function debouncePromise(fn, delay) {
//     // Your code here
// }


// Q24: Cache promise results
console.log("\nQ24: Create promise cache");
// function cachePromise(fn) {
//     // Your code here - cache results by arguments
// }


// Q25: Promise pipeline
console.log("\nQ25: Create pipeline that chains functions");
// function pipeline(...fns) {
//     // Your code here
//     // pipeline(fn1, fn2, fn3)(value) should chain all functions
// }


/*
🎯 SCORING:
1-5:   Beginner
6-10:  Intermediate
11-15: Advanced
16-20: Expert
21-25: Master
*/
