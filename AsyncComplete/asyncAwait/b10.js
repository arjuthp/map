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

const fetchWithTimeout = (url, ms) => Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))
]);

fetchWithTimeout("https://api.github.com/users/arjuthp", 2000)
    .then(console.log)
    .catch(err => console.log(err.message));