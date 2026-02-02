// Advanced Promise Concepts - Deep dive based on transcript

console.log("=== Advanced Promise Concepts ===");

// 1. Promise States (Pending, Fulfilled, Rejected)
console.log("\n--- Promise States ---");

// Pending Promise
const pendingPromise = new Promise((resolve, reject) => {
    // This promise will remain pending
    console.log("Promise created - State: Pending");
});

console.log("Pending Promise:", pendingPromise);

// Fulfilled Promise
const fulfilledPromise = new Promise((resolve, reject) => {
    resolve("Success!");
});

console.log("Fulfilled Promise:", fulfilledPromise);

// Rejected Promise
const rejectedPromise = new Promise((resolve, reject) => {
    reject("Failed!");
});

console.log("Rejected Promise:", rejectedPromise);

// 2. Promise Chaining (as discussed in transcript)
console.log("\n--- Promise Chaining ---");

function createPromiseWithData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: "chaiaurcode",
                email: "chai@example.com"
            });
        }, 1000);
    });
}

createPromiseWithData()
    .then((user) => {
        console.log("Full user object:", user);
        return user.username; // Return username for next .then()
    })
    .then((username) => {
        console.log("Username only:", username);
        return username.toUpperCase(); // Chain another operation
    })
    .then((upperUsername) => {
        console.log("Uppercase username:", upperUsername);
    })
    .catch((error) => {
        console.log("Error in chain:", error);
    });

// 3. Multiple Promises with different timing
console.log("\n--- Multiple Promises ---");

const fastPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Fast promise resolved");
        resolve("Fast result");
    }, 500);
});

const slowPromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Slow promise resolved");
        resolve("Slow result");
    }, 2000);
});

// Both promises will run concurrently
fastPromise.then(result => console.log("Fast:", result));
slowPromise.then(result => console.log("Slow:", result));

// 4. Database/Network simulation (as mentioned in transcript)
console.log("\n--- Database/Network Simulation ---");

function simulateDBCall(query) {
    return new Promise((resolve, reject) => {
        console.log(`Executing query: ${query}`);
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% success rate
            if (success) {
                resolve({
                    data: `Results for ${query}`,
                    timestamp: new Date().toISOString()
                });
            } else {
                reject(`Database error for query: ${query}`);
            }
        }, 1000);
    });
}

// Using the simulated DB call
simulateDBCall("SELECT * FROM users")
    .then(result => {
        console.log("DB Success:", result);
    })
    .catch(error => {
        console.log("DB Error:", error);
    });

// 5. File System simulation
console.log("\n--- File System Simulation ---");

function readFile(filename) {
    return new Promise((resolve, reject) => {
        console.log(`Reading file: ${filename}`);
        setTimeout(() => {
            if (filename.endsWith('.txt')) {
                resolve(`Content of ${filename}: Hello World!`);
            } else {
                reject(`Cannot read file: ${filename} - Invalid format`);
            }
        }, 800);
    });
}

readFile("data.txt")
    .then(content => console.log("File content:", content))
    .catch(error => console.log("File error:", error));

readFile("data.pdf")
    .then(content => console.log("File content:", content))
    .catch(error => console.log("File error:", error));

// 6. Cryptography simulation (mentioned in transcript)
console.log("\n--- Cryptography Simulation ---");

function encryptData(data) {
    return new Promise((resolve, reject) => {
        console.log("Encrypting data...");
        setTimeout(() => {
            if (data && data.length > 0) {
                const encrypted = btoa(data); // Simple base64 encoding
                resolve(`Encrypted: ${encrypted}`);
            } else {
                reject("Cannot encrypt empty data");
            }
        }, 1200);
    });
}

encryptData("sensitive information")
    .then(encrypted => console.log("Encryption result:", encrypted))
    .catch(error => console.log("Encryption error:", error));

// 7. Promise.all, Promise.race, Promise.allSettled (advanced concepts)
console.log("\n--- Promise Utility Methods ---");

const promise_a = new Promise(resolve => setTimeout(() => resolve("A"), 1000));
const promise_b = new Promise(resolve => setTimeout(() => resolve("B"), 1500));
const promise_c = new Promise(resolve => setTimeout(() => resolve("C"), 800));

// Promise.all - waits for all promises
Promise.all([promise_a, promise_b, promise_c])
    .then(results => console.log("Promise.all results:", results))
    .catch(error => console.log("Promise.all error:", error));

// Promise.race - returns first resolved promise
Promise.race([promise_a, promise_b, promise_c])
    .then(result => console.log("Promise.race winner:", result))
    .catch(error => console.log("Promise.race error:", error));

// 8. Error handling patterns
console.log("\n--- Error Handling Patterns ---");

function unreliableOperation() {
    return new Promise((resolve, reject) => {
        const random = Math.random();
        setTimeout(() => {
            if (random > 0.5) {
                resolve("Operation successful");
            } else {
                reject(new Error("Operation failed"));
            }
        }, 500);
    });
}

// Pattern 1: .catch() method
unreliableOperation()
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Caught error:", error.message));

// Pattern 2: async/await with try/catch
async function handleUnreliableOperation() {
    try {
        const result = await unreliableOperation();
        console.log("Async success:", result);
    } catch (error) {
        console.log("Async caught error:", error.message);
    }
}

handleUnreliableOperation();