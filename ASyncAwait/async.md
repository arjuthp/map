
# Async/Await & Promises - Complete Guide

## Table of Contents
1. Promises Basics
2. Async/Await Fundamentals
3. Error Handling
4. Real-World Examples
5. Interview Tips
6. Async/Await vs Promise.then/catch

---

## 1. PROMISES BASICS

### What is a Promise?
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

### Promise States:
- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

### Creating a Promise:
```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    if (success) {
        resolve(value);  // Success
    } else {
        reject(error);   // Failure
    }
});
```

### Consuming Promises:
```javascript
promise
    .then(result => console.log(result))   // Handle success
    .catch(error => console.log(error))    // Handle error
    .finally(() => console.log('Done'));   // Always executes
```

---

## 2. ASYNC/AWAIT FUNDAMENTALS

### What is async?
- `async` keyword makes a function return a Promise
- Even if you return a regular value, it gets wrapped in a Promise

```javascript
async function getData() {
    return "Hello";  // Returns Promise.resolve("Hello")
}

getData().then(data => console.log(data));  // "Hello"
```

### What is await?
- `await` can only be used inside `async` functions
- It pauses execution until the Promise resolves
- Makes async code look synchronous

```javascript
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}
```

---

## 3. KEY CONCEPTS

### async always returns a Promise
```javascript
async function test() {
    return 5;
}
// Same as:
function test() {
    return Promise.resolve(5);
}
```

### await pauses execution
```javascript
async function demo() {
    console.log('1');
    const result = await Promise.resolve('2');
    console.log(result);
    console.log('3');
}
// Output: 1, 2, 3 (in order)
```

### Behind the Scenes
When JavaScript encounters `await`:
1. Function execution is suspended
2. Promise is added to microtask queue
3. Call stack is freed for other code
4. When Promise resolves, function resumes

---

## 4. ERROR HANDLING

### Using try-catch (Recommended with async/await)
```javascript
async function fetchUser() {
    try {
        const response = await fetch('/api/user');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;  // Re-throw if needed
    }
}
```

### Using .catch()
```javascript
async function fetchUser() {
    const response = await fetch('/api/user').catch(err => {
        console.error('Fetch failed:', err);
    });
}
```

### Handling multiple errors
```javascript
async function multipleOperations() {
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);
        return { user, posts, comments };
    } catch (error) {
        if (error.code === 404) {
            console.log('Resource not found');
        } else if (error.code === 500) {
            console.log('Server error');
        } else {
            console.log('Unknown error:', error);
        }
    }
}
```

---

## 5. REAL-WORLD EXAMPLES

### Example 1: API Call
```javascript
async function getUserData(userId) {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        return null;
    }
}
```

### Example 2: Sequential vs Parallel Execution
```javascript
// Sequential (slower - 6 seconds total)
async function sequential() {
    const result1 = await fetch('/api/1');  // 3 seconds
    const result2 = await fetch('/api/2');  // 3 seconds
    return [result1, result2];
}

// Parallel (faster - 3 seconds total)
async function parallel() {
    const [result1, result2] = await Promise.all([
        fetch('/api/1'),  // Both run simultaneously
        fetch('/api/2')
    ]);
    return [result1, result2];
}
```

### Example 3: Timeout Implementation
```javascript
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, ms) {
    const timeoutPromise = timeout(ms).then(() => {
        throw new Error('Request timeout');
    });
    
    const fetchPromise = fetch(url);
    
    return Promise.race([fetchPromise, timeoutPromise]);
}
```

---

## 6. ASYNC/AWAIT vs PROMISE.THEN/CATCH

### Using Promises (.then/.catch)
```javascript
function getUser() {
    return fetch('/api/user')
        .then(response => response.json())
        .then(user => {
            return fetch(`/api/posts/${user.id}`);
        })
        .then(response => response.json())
        .then(posts => {
            console.log(posts);
            return posts;
        })
        .catch(error => {
            console.error(error);
        });
}
```

### Using Async/Await (Cleaner)
```javascript
async function getUser() {
    try {
        const response = await fetch('/api/user');
        const user = await response.json();
        
        const postsResponse = await fetch(`/api/posts/${user.id}`);
        const posts = await postsResponse.json();
        
        console.log(posts);
        return posts;
    } catch (error) {
        console.error(error);
    }
}
```

### When to use which?

**Use async/await when:**
- You want cleaner, more readable code
- You need to handle multiple sequential operations
- You want to use try-catch for error handling
- You're working with complex async logic

**Use .then/.catch when:**
- You need to handle multiple independent promises
- You want to chain transformations
- You're working with older codebases
- You need Promise.all, Promise.race, etc.

---

## 7. INTERVIEW TIPS

### Common Questions:

**Q: What does async function return?**
A: Always returns a Promise, even if you return a regular value.

**Q: Can you use await outside async function?**
A: No (except in top-level modules in modern JS). await must be inside async function.

**Q: What happens if you don't await a Promise?**
A: The function continues executing without waiting for the Promise to resolve.

**Q: How to handle errors in async/await?**
A: Use try-catch blocks or .catch() on the Promise.

**Q: What's the difference between Promise.all and sequential await?**
A: Promise.all runs promises in parallel, sequential await runs them one after another.

### Code Output Questions:

```javascript
// Question 1:
async function test() {
    console.log('1');
    await Promise.resolve();
    console.log('2');
}
test();
console.log('3');
// Output: 1, 3, 2 (await moves to microtask queue)

// Question 2:
async function test() {
    return 'Hello';
}
console.log(test());
// Output: Promise {<fulfilled>: 'Hello'}

// Question 3:
async function test() {
    const p = new Promise((resolve) => {
        setTimeout(() => resolve('Done'), 1000);
    });
    const result = await p;
    console.log(result);
}
test();
// Output: 'Done' (after 1 second)
```

---

## 8. BEST PRACTICES

1. **Always handle errors** - Use try-catch or .catch()
2. **Use Promise.all for parallel operations** - Don't await unnecessarily
3. **Don't forget to await** - Common mistake leading to bugs
4. **Return early on errors** - Avoid deep nesting
5. **Use async/await for readability** - Easier to understand than .then chains

### Example of Good Practice:
```javascript
async function processUserData(userId) {
    try {
        // Parallel operations
        const [user, settings, posts] = await Promise.all([
            fetchUser(userId),
            fetchSettings(userId),
            fetchPosts(userId)
        ]);
        
        // Sequential operations that depend on previous results
        const enrichedPosts = await enrichPostsWithComments(posts);
        
        return {
            user,
            settings,
            posts: enrichedPosts
        };
    } catch (error) {
        console.error('Error processing user data:', error);
        throw new Error('Failed to process user data');
    }
}
```

---

## 9. COMMON PITFALLS

### Pitfall 1: Forgetting await
```javascript
// Wrong
async function getData() {
    const data = fetch('/api/data');  // Returns Promise, not data!
    console.log(data);  // Promise object
}

// Correct
async function getData() {
    const data = await fetch('/api/data');
    console.log(data);  // Actual data
}
```

### Pitfall 2: Sequential when parallel is possible
```javascript
// Slow (6 seconds)
async function slow() {
    const a = await fetchA();  // 3 seconds
    const b = await fetchB();  // 3 seconds
    return [a, b];
}

// Fast (3 seconds)
async function fast() {
    const [a, b] = await Promise.all([fetchA(), fetchB()]);
    return [a, b];
}
```

### Pitfall 3: Not handling rejections
```javascript
// Dangerous - unhandled rejection
async function dangerous() {
    const data = await fetch('/api/data');  // Might fail!
    return data;
}

// Safe
async function safe() {
    try {
        const data = await fetch('/api/data');
        return data;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}
```

---

Reference: Namaste JavaScript - Season 02 - Ep 04 by Akshay Saini
