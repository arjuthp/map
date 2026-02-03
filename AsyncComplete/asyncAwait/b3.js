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


// function fetchUser() {
//     return new Promise(resolve => 
//         setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000)
//     );
// }
// function fetchPosts() {
//     return new Promise(resolve => 
//         setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 1000)
//     );
// }

// function fetchComments() {
//     return new Promise(resolve => 
//         setTimeout(() => resolve([{ id: 1, text: "Nice!" }]), 1000)
//     );
// }
// async function loadData() {
//     const [user, posts, comments] = await Promise.all([
//         fetchUser(),
//         fetchPosts(),
//         fetchComments()
//     ]);
//     return{user, posts, comments};
// }

async function loadData() {
    const [user, posts, comments] = await Promise.all([
        new Promise(resolve => setTimeout(() => resolve({ id: 1, name: "Alice" }), 1000)),
        new Promise(resolve => setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 1000)),
        new Promise(resolve => setTimeout(() => resolve([{ id: 1, text: "Nice!" }]), 1000))
    ]);
        return { user, posts, comments };
}
loadData().then(result => {
    console.log("\nFinal result:", result);
});
