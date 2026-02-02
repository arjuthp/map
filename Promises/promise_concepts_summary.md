# JavaScript Promises - Key Concepts from Transcript

## What is a Promise?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

## Promise States
1. **Pending** - Initial state, neither fulfilled nor rejected
2. **Fulfilled** - Operation completed successfully
3. **Rejected** - Operation failed

## Creating Promises

### Basic Syntax
```javascript
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Success data");
        } else {
            reject("Error message");
        }
    }, 1000);
});
```

## Consuming Promises

### Method 1: .then() / .catch() / .finally()
```javascript
myPromise
    .then(result => {
        console.log(result);
        return result; // Can chain more .then()
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Always executes");
    });
```

### Method 2: async/await
```javascript
async function consumePromise() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
```

## Promise Chaining
You can chain multiple `.then()` calls:
```javascript
promise
    .then(data => {
        console.log(data);
        return data.username; // Return for next .then()
    })
    .then(username => {
        console.log(username);
        return username.toUpperCase();
    })
    .then(upperUsername => {
        console.log(upperUsername);
    });
```

## Common Use Cases
1. **Network Requests** - API calls, fetch operations
2. **File System Operations** - Reading/writing files
3. **Database Operations** - Queries and transactions
4. **Cryptography** - Encryption/decryption operations
5. **Timer Operations** - setTimeout, setInterval

## Fetch API Example
```javascript
// Using .then/.catch
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Using async/await
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
```

## Error Handling Best Practices
1. Always handle errors with `.catch()` or `try/catch`
2. Use `.finally()` for cleanup operations
3. Consider retry logic for unreliable operations
4. Provide meaningful error messages

## Promise Utility Methods
- `Promise.all()` - Wait for all promises to resolve
- `Promise.race()` - Return first resolved promise
- `Promise.allSettled()` - Wait for all promises to settle (resolve or reject)

## Key Takeaways from Transcript
1. Promises solve callback hell
2. They represent future values
3. Can be chained for sequential operations
4. async/await is syntactic sugar over promises
5. Always handle both success and error cases
6. Fetch API returns promises
7. Multiple approaches exist - choose what fits your use case

## Historical Context
- Promises weren't always built into JavaScript
- Libraries like Bluebird and Q provided promise functionality
- ES6 introduced native Promise support
- Modern JavaScript heavily relies on promises for asynchronous operations