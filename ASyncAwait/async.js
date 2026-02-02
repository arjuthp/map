// ============================================
// ASYNC/AWAIT & PROMISES - PRACTICAL EXAMPLES
// ============================================

console.log("=== 1. ASYNC BASICS ===\n");

// async function always returns a Promise
async function getData() {
    return "Namaste";
}

const dataPromise = getData();
console.log("getData() returns:", dataPromise); // Promise object
dataPromise.then(res => console.log("Resolved value:", res)); // "Namaste"

// Even non-promise values are wrapped in Promise
async function getNumber() {
    return 42;
}
getNumber().then(num => console.log("Number:", num));


console.log("\n=== 2. AWAIT BASICS ===\n");

// await pauses execution until Promise resolves
async function waitExample() {
    console.log("Before await");
    
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data arrived!"), 2000);
    });
    
    const result = await promise; // Waits for 2 seconds
    console.log("After await:", result);
    console.log("Execution continues...");
}

// Uncomment to run:
// waitExample();


console.log("\n=== 3. PROMISE vs ASYNC/AWAIT ===\n");

// Using Promises with .then()
function fetchUserWithPromise(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            console.log("Promise way - User:", user.name);
            return user;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

// Using async/await (cleaner!)
async function fetchUserWithAsync(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        console.log("Async way - User:", user.name);
        return user;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Uncomment to test:
// fetchUserWithPromise(1);
// fetchUserWithAsync(1);


console.log("\n=== 4. ERROR HANDLING ===\n");

// Method 1: try-catch (recommended)
async function fetchWithTryCatch(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Caught error:", error.message);
        return null;
    }
}

// Method 2: .catch() on Promise
async function fetchWithCatch(url) {
    const response = await fetch(url).catch(err => {
        console.error("Fetch failed:", err);
        return null;
    });
    
    if (response) {
        return await response.json();
    }
}


console.log("\n=== 5. SEQUENTIAL vs PARALLEL ===\n");

// Sequential execution (SLOW - takes 6 seconds)
async function sequentialFetch() {
    console.time("Sequential");
    
    const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data1 = await user1.json();
    
    const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const data2 = await user2.json();
    
    console.timeEnd("Sequential");
    return [data1, data2];
}

// Parallel execution (FAST - takes 3 seconds)
async function parallelFetch() {
    console.time("Parallel");
    
    const [response1, response2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/users/2')
    ]);
    
    const [data1, data2] = await Promise.all([
        response1.json(),
        response2.json()
    ]);
    
    console.timeEnd("Parallel");
    return [data1, data2];
}

// Uncomment to compare:
// sequentialFetch().then(data => console.log("Sequential result:", data));
// parallelFetch().then(data => console.log("Parallel result:", data));


console.log("\n=== 6. REAL-WORLD EXAMPLES ===\n");

// Example 1: Fetch user and their posts
async function getUserWithPosts(userId) {
    try {
        // Fetch user
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await userResponse.json();
        
        // Fetch user's posts
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const posts = await postsResponse.json();
        
        return {
            user: user.name,
            email: user.email,
            totalPosts: posts.length,
            posts: posts.slice(0, 3) // First 3 posts
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

// Uncomment to test:
// getUserWithPosts(1).then(data => console.log("User with posts:", data));


// Example 2: Multiple API calls with Promise.all
async function fetchMultipleUsers(userIds) {
    try {
        const promises = userIds.map(id => 
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
        );
        
        const users = await Promise.all(promises);
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
        }));
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

// Uncomment to test:
// fetchMultipleUsers([1, 2, 3]).then(users => console.log("Multiple users:", users));


// Example 3: Timeout implementation
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, timeoutMs = 5000) {
    const timeoutPromise = timeout(timeoutMs).then(() => {
        throw new Error('Request timeout');
    });
    
    const fetchPromise = fetch(url).then(res => res.json());
    
    try {
        const result = await Promise.race([fetchPromise, timeoutPromise]);
        return result;
    } catch (error) {
        console.error("Fetch error:", error.message);
        throw error;
    }
}


// Example 4: Retry logic
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            console.log(`Attempt ${i + 1}...`);
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (error) {
            console.log(`Attempt ${i + 1} failed:`, error.message);
            
            if (i === maxRetries - 1) {
                throw new Error(`Failed after ${maxRetries} attempts`);
            }
            
            // Wait before retrying (exponential backoff)
            await timeout(1000 * Math.pow(2, i));
        }
    }
}


console.log("\n=== 7. INTERVIEW QUESTIONS ===\n");

// Q1: What does this output?
async function question1() {
    console.log('1');
    await Promise.resolve();
    console.log('2');
}
question1();
console.log('3');
// Output: 1, 3, 2 (await moves to microtask queue)


// Q2: What's the difference?
async function test1() {
    return 'Hello';
}

async function test2() {
    return Promise.resolve('Hello');
}
// Both are identical! async always returns a Promise


// Q3: Common mistake - forgetting await
async function mistake() {
    const data = fetch('https://api.example.com/data'); // Missing await!
    console.log(data); // Logs Promise, not data
}

async function correct() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data); // Logs actual data
}


// Q4: Handling multiple promises
async function handleMultiple() {
    try {
        // All succeed or all fail
        const [user, posts, comments] = await Promise.all([
            fetchUser(),
            fetchPosts(),
            fetchComments()
        ]);
        
        // First to complete wins
        const fastest = await Promise.race([
            fetchFromServer1(),
            fetchFromServer2()
        ]);
        
        // All settle (success or failure)
        const results = await Promise.allSettled([
            fetchUser(),
            fetchPosts(),
            fetchComments()
        ]);
        
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} succeeded:`, result.value);
            } else {
                console.log(`Promise ${index} failed:`, result.reason);
            }
        });
    } catch (error) {
        console.error("Error:", error);
    }
}


console.log("\n=== 8. ADVANCED PATTERNS ===\n");

// Pattern 1: Async IIFE (Immediately Invoked Function Expression)
(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await data.json();
    console.log("IIFE result:", user.name);
})();


// Pattern 2: Async iteration
async function processItems(items) {
    for (const item of items) {
        await processItem(item); // Sequential processing
    }
}

async function processItemsParallel(items) {
    await Promise.all(items.map(item => processItem(item))); // Parallel
}


// Pattern 3: Async queue with concurrency limit
async function processWithLimit(items, limit = 3) {
    const results = [];
    
    for (let i = 0; i < items.length; i += limit) {
        const batch = items.slice(i, i + limit);
        const batchResults = await Promise.all(
            batch.map(item => processItem(item))
        );
        results.push(...batchResults);
    }
    
    return results;
}


// Pattern 4: Conditional async operations
async function conditionalFetch(useCache) {
    if (useCache) {
        return getCachedData();
    }
    
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    cacheData(data);
    return data;
}


console.log("\n=== 9. BEST PRACTICES ===\n");

// ✅ DO: Handle errors
async function goodPractice1() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// ✅ DO: Use Promise.all for parallel operations
async function goodPractice2() {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);
}

// ✅ DO: Return early on errors
async function goodPractice3() {
    const user = await fetchUser();
    if (!user) return null;
    
    const posts = await fetchPosts(user.id);
    if (!posts) return null;
    
    return { user, posts };
}

// ❌ DON'T: Forget await
async function badPractice1() {
    const data = fetchData(); // Missing await!
    console.log(data); // Promise, not data
}

// ❌ DON'T: Sequential when parallel is possible
async function badPractice2() {
    const users = await fetchUsers(); // 3 seconds
    const posts = await fetchPosts(); // 3 seconds
    // Total: 6 seconds (should be 3 with Promise.all)
}

// ❌ DON'T: Ignore errors
async function badPractice3() {
    const data = await fetchData(); // Might throw!
    return data;
}


console.log("\n=== PRACTICE EXERCISES ===\n");

// Exercise 1: Convert this Promise chain to async/await
function exercise1Promise() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(user => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`))
        .then(res => res.json())
        .then(posts => console.log(posts))
        .catch(err => console.error(err));
}

// Your solution:
async function exercise1Async() {
    // Write your code here
}


// Exercise 2: Fetch 5 users in parallel and return their names
async function exercise2() {
    // Write your code here
}


// Exercise 3: Implement a delay function and use it
function delay(ms) {
    // Write your code here
}

async function exercise3() {
    console.log("Start");
    // Wait 2 seconds
    console.log("After 2 seconds");
}


// Helper functions (mock implementations)
function fetchUser() {
    return Promise.resolve({ id: 1, name: "John" });
}

function fetchPosts() {
    return Promise.resolve([{ id: 1, title: "Post 1" }]);
}

function fetchComments() {
    return Promise.resolve([{ id: 1, text: "Comment 1" }]);
}

function fetchFromServer1() {
    return new Promise(resolve => setTimeout(() => resolve("Server 1"), 1000));
}

function fetchFromServer2() {
    return new Promise(resolve => setTimeout(() => resolve("Server 2"), 2000));
}

function processItem(item) {
    return Promise.resolve(`Processed: ${item}`);
}

function getCachedData() {
    return { cached: true };
}

function cacheData(data) {
    console.log("Data cached");
}

function fetchData() {
    return Promise.resolve({ data: "example" });
}

function fetchUsers() {
    return Promise.resolve([{ id: 1, name: "User 1" }]);
}


console.log("\n=== END OF EXAMPLES ===");
console.log("Uncomment the function calls to test them!");
console.log("Remember: async/await makes async code look synchronous!");