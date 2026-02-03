// ============================================
// TOP 10 ASYNC/AWAIT QUESTIONS FOR BEGINNERS
// ============================================

console.log("=== TOP 10 ESSENTIAL ASYNC/AWAIT QUESTIONS ===\n");

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


// Q2: Handle errors with try/catch
console.log("\nQ2: Add error handling to this async function");
// async function fetchData() {
//     const response = await fetch('/api/data');
//     const data = await response.json();
//     return data;
// }
// Add try/catch:


// Q3: Sequential vs Parallel - Understanding the difference
console.log("\nQ3: Run these in PARALLEL (not sequential)");
// async function loadData() {
//     const user = await fetchUser();      // 1s
//     const posts = await fetchPosts();    // 1s
//     const comments = await fetchComments(); // 1s
//     // Total: 3 seconds (slow!)
//     return { user, posts, comments };
// }
// Fix to run in parallel (1 second total):


// Q4: Mixed sequential and parallel
console.log("\nQ4: Optimize - which can run in parallel?");
// async function loadPage(userId) {
//     const user = await fetchUser(userId);        // Must be first
//     const posts = await fetchPosts(user.id);     // Depends on user
//     const ads = await fetchAds();                // Independent!
//     const config = await fetchConfig();          // Independent!
//     return { user, posts, ads, config };
// }
// Optimize:


// Q5: Return value from async function
console.log("\nQ5: What does this return and how to get the value?");
// async function getValue() {
//     return 42;
// }
// What is the type of getValue()?
// How do you get the value 42?


// Q6: Multiple awaits in sequence
console.log("\nQ6: Fetch user, then their posts, then first post's comments");
// async function getUserData(userId) {
//     // 1. Fetch user
//     // 2. Fetch their posts using user.id
//     // 3. Fetch comments for first post
//     // Return all three
// }


// Q7: Try/catch with finally
console.log("\nQ7: Add loading spinner with proper cleanup");
// async function uploadFile(file) {
//     showSpinner();
//     const result = await upload(file);
//     hideSpinner();
//     return result;
// }
// Use try/catch/finally to ensure spinner always hides:


// Q8: Async map - Process array in parallel
console.log("\nQ8: Fetch multiple users in parallel");
// const ids = [1, 2, 3, 4, 5];
// async function fetchAllUsers(ids) {
//     // Fetch all users at once (parallel)
//     // Return array of users
// }


// Q9: Async forEach (common mistake!)
console.log("\nQ9: Fix this - forEach doesn't wait for async");
// const ids = [1, 2, 3];
// async function processIds() {
//     ids.forEach(async (id) => {
//         await processId(id);
//     });
//     console.log("Done!"); // Prints BEFORE processing!
// }
// Fix it:


// Q10: Timeout wrapper
console.log("\nQ10: Add timeout to async function");
// async function fetchWithTimeout(url, ms) {
//     // Fetch url, but reject if takes longer than ms
//     // Your code here
// }
// Test:
// fetchWithTimeout('/api/slow', 2000)
//     .then(data => console.log(data))
//     .catch(err => console.log(err.message));



