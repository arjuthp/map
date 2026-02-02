// Common Promise Patterns - Quick Reference

console.log("=== Promise Patterns Quick Reference ===");

// Pattern 1: Basic Promise Creation
function createBasicPromise(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Success!");
            } else {
                reject("Failed!");
            }
        }, 1000);
    });
}

// Pattern 2: Promise with data
function createPromiseWithData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "John Doe",
                email: "john@example.com"
            });
        }, 1000);
    });
}

// Pattern 3: Promise chaining
createPromiseWithData()
    .then(user => {
        console.log("User:", user);
        return user.name;
    })
    .then(name => {
        console.log("Name:", name);
        return name.toUpperCase();
    })
    .then(upperName => {
        console.log("Upper name:", upperName);
    })
    .catch(error => console.log("Error:", error));

// Pattern 4: Async/await
async function asyncPattern() {
    try {
        const user = await createPromiseWithData();
        console.log("Async user:", user);
        return user;
    } catch (error) {
        console.log("Async error:", error);
        throw error;
    }
}

// Pattern 5: Multiple promises - Sequential
async function sequentialPromises() {
    const result1 = await createBasicPromise();
    const result2 = await createBasicPromise();
    return [result1, result2];
}

// Pattern 6: Multiple promises - Parallel
async function parallelPromises() {
    const [result1, result2] = await Promise.all([
        createBasicPromise(),
        createBasicPromise()
    ]);
    return [result1, result2];
}

// Pattern 7: Promise with timeout
function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), ms);
    });
    return Promise.race([promise, timeout]);
}

// Pattern 8: Retry logic
async function withRetry(promiseFunction, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await promiseFunction();
        } catch (error) {
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// Pattern 9: Converting callback to promise
function callbackToPromise(callbackFunction) {
    return new Promise((resolve, reject) => {
        callbackFunction((error, result) => {
            if (error) reject(error);
            else resolve(result);
        });
    });
}

// Pattern 10: Promise queue (sequential execution)
async function promiseQueue(promises) {
    const results = [];
    for (const promise of promises) {
        const result = await promise();
        results.push(result);
    }
    return results;
}

// Test the patterns
console.log("Testing patterns...");

asyncPattern().then(result => console.log("Async pattern result:", result));

parallelPromises().then(results => 
    console.log("Parallel results:", results)
);

withTimeout(createBasicPromise(), 2000)
    .then(result => console.log("Timeout success:", result))
    .catch(error => console.log("Timeout error:", error.message));

// Pattern 11: Error handling with specific error types
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function handleSpecificErrors() {
    return new Promise((resolve, reject) => {
        const errorType = Math.random();
        if (errorType < 0.33) {
            reject(new NetworkError("Network connection failed"));
        } else if (errorType < 0.66) {
            reject(new ValidationError("Invalid input data"));
        } else {
            resolve("Success");
        }
    });
}

handleSpecificErrors()
    .then(result => console.log("Specific error success:", result))
    .catch(error => {
        if (error instanceof NetworkError) {
            console.log("Network issue:", error.message);
        } else if (error instanceof ValidationError) {
            console.log("Validation issue:", error.message);
        } else {
            console.log("Unknown error:", error.message);
        }
    });

console.log("All patterns initiated!");