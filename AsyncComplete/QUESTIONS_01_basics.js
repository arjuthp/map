// ============================================
// PRACTICE QUESTIONS: ASYNC BASICS
// ============================================

// Instructions: Try to answer/solve each question before checking answers
// Run the code to verify your understanding

console.log("=== LEVEL 1: PREDICT THE OUTPUT ===\n");

// Q1: What will be the output order?
console.log("Q1:");
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Your answer: ___

// Q2: What will be the output order?
console.log("\nQ2:");
console.log("Start");
setTimeout(() => console.log("Timeout 1"), 1000);
setTimeout(() => console.log("Timeout 2"), 500);
console.log("End");
// Your answer: ___

// Q3: What will be the output?
console.log("\nQ3:");
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(i), i * 1000);
}
// Your answer: ___

// Q4: What will be the output?
console.log("\nQ4:");
function test() {
    console.log("1");
    setTimeout(() => console.log("2"), 0);
    Promise.resolve().then(() => console.log("3"));
    console.log("4");
}
test();
// Your answer: ___

// Q5: What will this return?
console.log("\nQ5:");
function getData() {
    let data;
    setTimeout(() => {
        data = "Hello";
    }, 1000);
    return data;
}
console.log(getData());
// Your answer: ___

console.log("\n=== LEVEL 2: FIX THE CODE ===\n");

// Q6: Fix this to print 1, 2, 3 in order
console.log("Q6: Fix to print 1, 2, 3 in order");
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);
// Fix here:


// Q7: Fix this to get the user data
// Q7: Fix this to get the user data
console.log("\nQ7: Fix to get user data");
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
        const user = { name: "Alice" };
        resolve(user);
    }, 1000);
    })
};
getUser().then((user) => {
    console.log(user);
});
// Fix here:


// Q8: Fix this callback hell
console.log("\nQ8: Flatten this callback hell");
function step1(callback) {
    setTimeout(() => callback("data1"), 500);
}
function step2(data, callback) {
    setTimeout(() => callback(data + "+data2"), 500);
}
function step3(data, callback) {
    setTimeout(() => callback(data + "+data3"), 500);
}

// Current (nested):
step1((result1) => {
    step2(result1, (result2) => {
        step3(result2, (result3) => {
            console.log(result3);
        });
    });
});
// Refactor to be more readable:


console.log("\n=== LEVEL 3: WRITE THE CODE ===\n");

// Q9: Create a delay function
console.log("Q9: Create delay(ms) that waits for ms milliseconds");
// function delay(ms) {
//     // Your code here
// }
// Test: delay(2000).then(() => console.log("2 seconds passed"));


// Q10: Create a countdown function
console.log("\nQ10: Create countdown(n) that counts from n to 0");
// function countdown(n) {
//     // Your code here - print n, n-1, ..., 0 with 1 second delay
// }
// Test: countdown(5);


// Q11: Create a retry function
console.log("\nQ11: Create retry(fn, times) that retries fn up to times");
// function retry(fn, times) {
//     // Your code here
// }


// Q12: Create a timeout wrapper
console.log("\nQ12: Create timeout(promise, ms) that rejects if promise takes too long");
// function timeout(promise, ms) {
//     // Your code here
// }


console.log("\n=== LEVEL 4: REAL SCENARIOS ===\n");

// Q13: Traffic light simulator
console.log("Q13: Create traffic light: Red(3s) → Yellow(1s) → Green(2s) → repeat");
// function trafficLight() {
//     // Your code here
// }


// Q14: File processor
console.log("\nQ14: Create file processor: read → process → save");
// function processFile(filename) {
//     // Your code here
//     // 1. Read file (1s)
//     // 2. Process content (2s)
//     // 3. Save file (1s)
// }


// Q15: API retry with exponential backoff
console.log("\nQ15: Create API call with retry and exponential backoff");
// function apiCallWithRetry(url, maxRetries) {
//     // Your code here
//     // Retry delays: 1s, 2s, 4s, 8s...
// }


console.log("\n=== LEVEL 5: DEBUGGING ===\n");

// Q16: Why doesn't this work?
console.log("Q16: Debug this code");
function fetchData() {
    setTimeout(() => {
        return "data";
    }, 1000);
}
const result = fetchData();
console.log(result); // undefined - why?
// Explain and fix:


// Q17: Why doesn't this work?
console.log("\nQ17: Debug this code");
async function getData() {
    const data = await setTimeout(() => "data", 1000);
    return data;
}
// getData().then(console.log); // Doesn't work - why?
// Explain and fix:


// Q18: What's wrong here?
console.log("\nQ18: Debug this code");
function getUsers() {
    return fetch('/api/users')
        .then(response => response.json())
        .then(users => {
            console.log(users);
        });
}
// getUsers().then(users => console.log(users)); // undefined - why?
// Explain and fix:


console.log("\n=== BONUS CHALLENGES ===\n");

// Q19: Implement Promise.all from scratch
console.log("Q19: Implement your own Promise.all");
// function myPromiseAll(promises) {
//     // Your code here
// }


// Q20: Implement async queue
console.log("\nQ20: Create a queue that processes tasks one at a time");
// class AsyncQueue {
//     constructor() {
//         // Your code here
//     }
//     
//     add(task) {
//         // Your code here
//     }
// }


/*
🎯 SCORING:
1-5:   Beginner - Keep practicing!
6-10:  Intermediate - Good progress!
11-15: Advanced - Almost there!
16-18: Expert - You got this!
19-20: Master - Async ninja! 🥷
*/
