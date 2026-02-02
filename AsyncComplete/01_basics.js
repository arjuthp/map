// ============================================
// 01: SYNC vs ASYNC - The Foundation
// ============================================

/*
🎯 CORE CONCEPT:
JavaScript is single-threaded but can handle multiple operations
through asynchronous programming.

🔑 KEY POINTS:
1. Synchronous = Blocking (wait in line)
2. Asynchronous = Non-blocking (get a buzzer, do other things)
3. JavaScript uses Event Loop to handle async operations
*/

console.log("=== SYNCHRONOUS CODE ===\n");

// Synchronous: Runs line by line, blocks execution
function makeSandwich() {
    console.log("1. Get bread");
    console.log("2. Add peanut butter");
    console.log("3. Add jelly");
    console.log("4. Close sandwich");
    return "Sandwich ready!";
}

const result = makeSandwich();
console.log(result);
console.log("5. Eat sandwich\n");

// Output: 1, 2, 3, 4, Sandwich ready!, 5 (in order)

console.log("=== ASYNCHRONOUS CODE ===\n");

// Asynchronous: Doesn't block, continues execution
function orderPizza() {
    console.log("1. Call pizza place");
    
    // This is async - doesn't block!
    setTimeout(() => {
        console.log("3. Pizza arrives! 🍕");
    }, 2000);
    
    console.log("2. Watch TV while waiting");
}

orderPizza();
console.log("4. Check phone\n");

// Output: 1, 2, 4, (wait 2 seconds), 3

/*
🤔 WHY ASYNC?
- Don't freeze the browser while waiting
- Handle multiple operations simultaneously
- Better user experience
- Efficient resource usage
*/

console.log("=== THE PROBLEM ===\n");

// This doesn't work as expected!
function getUserData() {
    let user;
    
    setTimeout(() => {
        user = { name: "Alice", age: 25 };
    }, 1000);
    
    return user; // Returns undefined! 😱
}

console.log("User:", getUserData()); // undefined

/*
❓ WHY undefined?
- setTimeout is async
- Function returns BEFORE setTimeout completes
- We need a way to "wait" for async operations
*/

console.log("\n=== PRACTICE QUESTIONS ===\n");

// Q1: What will print first?
console.log("Q1: Predict the output order:");
console.log("A");
setTimeout(() => console.log("B"), 0); // Even 0ms is async!
console.log("C");
// Answer: A, C, B

// Q2: Fix this to get the data
console.log("\nQ2: How to get the user data?");
function getUserDataFixed(callback) {
    setTimeout(() => {
        const user = { name: "Bob", age: 30 };
        callback(user); // Pass data to callback!
    }, 1000);
}

getUserDataFixed((user) => {
    console.log("Fixed! User:", user);
});

// Q3: What's the output?
console.log("\nQ3: Predict the output:");
for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log(`Number: ${i}`), i * 1000);
}
// Answer: 1 (after 1s), 2 (after 2s), 3 (after 3s)

// Q4: Synchronous delay (BAD!)
console.log("\nQ4: Blocking vs Non-blocking:");

function blockingDelay(seconds) {
    const start = Date.now();
    while (Date.now() - start < seconds * 1000) {
        // CPU is busy doing nothing! 😱
    }
    console.log(`Blocked for ${seconds} seconds`);
}

function nonBlockingDelay(seconds) {
    setTimeout(() => {
        console.log(`Non-blocked for ${seconds} seconds`);
    }, seconds * 1000);
}

// blockingDelay(2); // Uncomment to freeze everything!
nonBlockingDelay(2); // Doesn't block!

console.log("This prints immediately!\n");

/*
🎓 SUMMARY:
1. Sync code blocks execution
2. Async code doesn't block
3. setTimeout, fetch, file I/O are async
4. We need patterns to handle async results
5. Next: Callbacks (the first solution)
*/

// 🏆 CHALLENGE: Create a traffic light simulator
console.log("=== CHALLENGE ===\n");

function trafficLight() {
    console.log("🔴 Red light");
    
    setTimeout(() => {
        console.log("🟡 Yellow light");
        
        setTimeout(() => {
            console.log("🟢 Green light");
        }, 1000);
    }, 2000);
}

// trafficLight(); // Uncomment to see it work!

/*
💡 NEXT FILE: 02_callbacks.js
Learn how to handle async operations with callbacks!
*/
