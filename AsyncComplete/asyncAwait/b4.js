
// Q4: Mixed sequential and parallel
console.log("\nQ4: Optimize - which can run in parallel?");

// Optimize:
// async function loadPage(userId) {
//     const user = await fetchUser(userId);        // Must be first
//     const posts = await fetchPosts(user.id);     // Depends on user
//     const ads = await fetchAds();                // Independent!
//     const config = await fetchConfig();          // Independent!
//     return { user, posts, ads, config };
// }

const fetchUser = (id) => new Promise(r => setTimeout(() => r({ id, name: "Alice" }), 1000));
const fetchPosts = (id) => new Promise(r => setTimeout(() => r([{ id: 1, title: "Post 1" }]), 1000));
const fetchAds = () => new Promise(r => setTimeout(() => r([{ id: 1, text: "Ad" }]), 1000));
const fetchConfig = () => new Promise(r => setTimeout(() => r({ theme: "dark" }), 1000));

async function OptimizedLoadPage(userId) {
    const user = await fetchUser(userId);
    const [posts, ads, config] = await Promise.all([
        fetchPosts(user.id),
        fetchAds(),
        fetchConfig()
    ]);
    return { user, posts, ads, config };
}

OptimizedLoadPage(1).then(result => {
    console.log("\nFinal result:", result);
});