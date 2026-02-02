// Promise Exercises - Practice what you learned from the transcript

console.log("=== Promise Exercises ===");

// Exercise 1: Create a promise that resolves after 2 seconds with your name
console.log("\n--- Exercise 1: Basic Promise ---");
// TODO: Create a promise that resolves with your name after 2 seconds
// Then consume it using .then()

const namePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Your Name Here");
    }, 2000);
});

namePromise.then(name => {
    console.log("My name is:", name);
});

// Exercise 2: Create a promise that randomly succeeds or fails
console.log("\n--- Exercise 2: Random Success/Failure ---");// TODO: Create a promise that has 50% chance of success
// If success: resolve with "Task completed successfully"
// If failure: reject with "Task failed"
// Handle both cases


function randomTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 1000);
    });
}

randomTask()
    .then(result => console.log("✅", result))
    .catch(error => console.log("❌", error))
    .finally(() => console.log("Task attempt finished"));

// Exercise 3: Chain multiple promises
console.log("\n--- Exercise 3: Promise Chaining ---");
// TODO: Create a chain where:
// 1. First promise returns a number
// 2. Second promise multiplies it by 2
// 3. Third promise adds 10 to it
// 4. Log the final result

function getNumber() {
    return new Promise(resolve => {
        setTimeout(() => resolve(5), 500);
    });
}

getNumber()
    .then(num => {
        
        console.log("Initial number:", num);
        return num * 2;
    })
    .then(doubled => {
        console.log("Doubled:", doubled);
        return doubled + 10;
    })
    .then(final => {
        console.log("Final result:", final);
    });

// Exercise 4: Convert callback to promise
console.log("\n--- Exercise 4: Callback to Promise ---");
// TODO: Convert this callback-based function to return a promise

function oldCallbackFunction(callback) {
    setTimeout(() => {
        const data = { id: 1, message: "Hello from callback" };
        callback(null, data);
    }, 1000);
}

// Convert to promise
function newPromiseFunction() {
    return new Promise((resolve, reject) => {
        oldCallbackFunction((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

newPromiseFunction()
    .then(data => console.log("Converted to promise:", data))
    .catch(error => console.log("Error:", error));

// Exercise 5: Async/await practice
console.log("\n--- Exercise 5: Async/Await ---");
// TODO: Rewrite the promise chain from Exercise 3 using async/await

async function processNumber() {
    try {
        const num = await getNumber();
        console.log("Async - Initial number:", num);
        
        const doubled = num * 2;
        console.log("Async - Doubled:", doubled);
        
        const final = doubled + 10;
        console.log("Async - Final result:", final);
        
        return final;
    } catch (error) {
        console.log("Async error:", error);
    }
}

processNumber();

// Exercise 6: Multiple API calls simulation
console.log("\n--- Exercise 6: Multiple API Calls ---");
// TODO: Create functions that simulate API calls and use them together

function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id, name: `User ${id}`, email: `user${id}@example.com` });
        }, Math.random() * 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, title: `Post 1 by User ${userId}` },
                { id: 2, title: `Post 2 by User ${userId}` }
            ]);
        }, Math.random() * 1000);
    });
}

// Method 1: Sequential (one after another)
async function getUserDataSequential(userId) {
    console.log("Fetching user data sequentially...");
    const user = await fetchUser(userId);
    const posts = await fetchUserPosts(userId);
    return { user, posts };
}

// Method 2: Parallel (at the same time)
async function getUserDataParallel(userId) {
    console.log("Fetching user data in parallel...");
    const [user, posts] = await Promise.all([
        fetchUser(userId),
        fetchUserPosts(userId)
    ]);
    return { user, posts };
}

// Test both methods
getUserDataSequential(1).then(data => 
    console.log("Sequential result:", data)
);

getUserDataParallel(2).then(data => 
    console.log("Parallel result:", data)
);

// Exercise 7: Error handling with retry logic
console.log("\n--- Exercise 7: Retry Logic ---");
// TODO: Create a function that retries a failed operation up to 3 times

function unreliableAPI() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.7; // 30% success rate
        setTimeout(() => {
            if (success) {
                resolve("API call successful!");
            } else {
                reject(new Error("API call failed"));
            }
        }, 500);
    });
}

async function retryOperation(operation, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}...`);
            const result = await operation();
            console.log("Success on attempt", attempt);
            return result;
        } catch (error) {
            console.log(`Attempt ${attempt} failed:`, error.message);
            if (attempt === maxRetries) {
                throw new Error(`All ${maxRetries} attempts failed`);
            }
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

retryOperation(unreliableAPI)
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("Final error:", error.message));

// Exercise 8: Promise timeout
console.log("\n--- Exercise 8: Promise Timeout ---");
// TODO: Create a function that adds timeout to any promise

function withTimeout(promise, timeoutMs) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Operation timed out")), timeoutMs);
    });
    
    return Promise.race([promise, timeout]);
}

function slowOperation() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Slow operation completed"), 3000);
    });
}

// This will timeout after 2 seconds
withTimeout(slowOperation(), 2000)
    .then(result => console.log("Timeout result:", result))
    .catch(error => console.log("Timeout error:", error.message));

console.log("\n=== All exercises started! Check the results above ===");