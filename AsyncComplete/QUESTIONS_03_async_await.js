// ============================================
// PRACTICE QUESTIONS: ASYNC/AWAIT
// ============================================

console.log("=== LEVEL 1: BASIC ASYNC/AWAIT ===\n");

// Q1: Convert promise to async/await
console.log("Q1: Convert this promise code to async/await");
// Promise version:
function getUserPromise(id) {
    return fetch(`/api/users/${id}`)
        .then(response => response.json())
        .then(user => console.log(user));
}
// Async/await version:
// async function getUserAsync(id) {
//     // Your code here
// }


// Q2: Create simple async function
console.log("\nQ2: Create async function that waits 1s and returns 'Done'");
// async function wait() {
//     // Your code here
// }
// wait().then(msg => console.log(msg));


// Q3: Handle errors with try/catch
console.log("\nQ3: Add error handling to this async function");
// async function fetchData() {
//     const response = await fetch('/api/data');
//     const data = await response.json();
//     return data;
// }
// Add try/catch:


// Q4: Multiple awaits
console.log("\nQ4: Fetch user, then their posts, then comments");
// async function getUserData(userId) {
//     // Your code here
//     // 1. Fetch user
//     // 2. Fetch their posts
//     // 3. Fetch comments for first post
// }


// Q5: Return value from async function
console.log("\nQ5: What does this return?");
async function getValue() {
    return 42;
}
// What is the type of getValue()? 
// How do you get the value 42?


console.log("\n=== LEVEL 2: SEQUENTIAL vs PARALLEL ===\n");

// Q6: Sequential execution (slow)
console.log("Q6: These run one after another (3 seconds total)");
// async function sequential() {
//     const a = await delay(1000); // 1s
//     const b = await delay(1000); // 1s
//     const c = await delay(1000); // 1s
//     return [a, b, c];
// }


// Q7: Parallel execution (fast)
console.log("\nQ7: Convert Q6 to run in parallel (1 second total)");
// async function parallel() {
//     // Your code here - use Promise.all
// }


// Q8: When to use sequential vs parallel?
console.log("\nQ8: Fix this - which should be parallel?");
async function loadPage() {
    const user = await fetchUser();           // Needs to be first
    const posts = await fetchPosts(user.id);  // Depends on user
    const ads = await fetchAds();             // Independent!
    const config = await fetchConfig();       // Independent!
    return { user, posts, ads, config };
}
// Optimize:


// Q9: Mixed sequential and parallel
console.log("\nQ9: Optimize this function");
async function processOrder(orderId) {
    const order = await fetchOrder(orderId);        // Must be first
    const user = await fetchUser(order.userId);     // Depends on order
    const product = await fetchProduct(order.productId); // Depends on order
    const inventory = await checkInventory(product.id);  // Depends on product
    const shipping = await calculateShipping(user.address); // Depends on user
    return { order, user, product, inventory, shipping };
}
// Which can run in parallel?


// Q10: Race condition
console.log("\nQ10: Fix this race condition");
let counter = 0;
async function increment() {
    const current = counter;
    await delay(100);
    counter = current + 1;
}
// If we call increment() 3 times, counter might not be 3!
// Fix it:


console.log("\n=== LEVEL 3: ERROR HANDLING ===\n");

// Q11: Try/catch with multiple awaits
console.log("Q11: Add proper error handling");
// async function processData() {
//     const data1 = await fetchData1();
//     const data2 = await fetchData2();
//     const data3 = await fetchData3();
//     return [data1, data2, data3];
// }
// Add try/catch:


// Q12: Catch specific errors
console.log("\nQ12: Handle different error types");
// async function smartFetch(url) {
//     // Handle network errors differently from API errors
//     // Your code here
// }


// Q13: Finally block
console.log("\nQ13: Add cleanup with finally");
// async function uploadFile(file) {
//     showSpinner();
//     const result = await upload(file);
//     hideSpinner();
//     return result;
// }
// Use try/catch/finally:


// Q14: Error recovery
console.log("\nQ14: Retry on failure");
// async function fetchWithRetry(url, maxRetries) {
//     // Your code here
//     // Retry up to maxRetries times
// }


// Q15: Partial failure handling
console.log("\nQ15: Continue even if some operations fail");
// async function loadDashboard() {
//     // Load user (required)
//     // Load posts (optional - continue if fails)
//     // Load ads (optional - continue if fails)
//     // Your code here
// }


console.log("\n=== LEVEL 4: ADVANCED PATTERNS ===\n");

// Q16: Async forEach (doesn't work!)
console.log("Q16: Fix this - forEach doesn't wait for async");
const ids = [1, 2, 3];
async function processIds() {
    ids.forEach(async (id) => {
        await processId(id);
    });
    console.log("Done!"); // Prints before processing!
}
// Fix it:


// Q17: Async map
console.log("\nQ17: Map array with async function");
// const ids = [1, 2, 3, 4, 5];
// async function fetchUsers(ids) {
//     // Fetch all users in parallel
//     // Your code here
// }


// Q18: Async filter
console.log("\nQ18: Filter array with async predicate");
// async function isValid(id) {
//     // Async validation
//     return new Promise(resolve => {
//         setTimeout(() => resolve(id % 2 === 0), 100);
//     });
// }
// const ids = [1, 2, 3, 4, 5];
// Filter to get only valid ids:


// Q19: Async reduce
console.log("\nQ19: Reduce array with async function");
// const urls = ['/api/1', '/api/2', '/api/3'];
// async function fetchAll(urls) {
//     // Fetch sequentially and accumulate results
//     // Your code here - use reduce
// }


// Q20: Timeout wrapper
console.log("\nQ20: Add timeout to async function");
// async function withTimeout(asyncFn, ms) {
//     // Your code here
//     // Reject if asyncFn takes longer than ms
// }


console.log("\n=== LEVEL 5: REAL WORLD ===\n");

// Q21: API pagination
console.log("Q21: Fetch all pages from paginated API");
// async function fetchAllPages(baseUrl) {
//     // Keep fetching until no more pages
//     // Your code here
// }


// Q22: Batch processing
console.log("\nQ22: Process 100 items in batches of 10");
// async function processBatch(items, batchSize) {
//     // Your code here
// }


// Q23: Debounced async function
console.log("\nQ23: Create debounced search");
// function debounce(fn, delay) {
//     // Your code here
// }
// const debouncedSearch = debounce(async (query) => {
//     return await fetch(`/api/search?q=${query}`);
// }, 300);


// Q24: Cache with expiration
console.log("\nQ24: Create cache that expires after 5 minutes");
// function createCache(ttl) {
//     // Your code here
// }


// Q25: Async queue
console.log("\nQ25: Process tasks one at a time");
// class AsyncQueue {
//     constructor() {
//         // Your code here
//     }
//     
//     async add(task) {
//         // Your code here
//     }
// }


/*
🎯 SCORING:
1-5:   Beginner
6-10:  Intermediate
11-15: Advanced
16-20: Expert
21-25: Master
*/
