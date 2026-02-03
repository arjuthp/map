// Q6: Multiple awaits in sequence
console.log("\nQ6: Fetch user, then their posts, then first post's comments");
// async function getUserData(userId) {
//     // 1. Fetch user
//     // 2. Fetch their posts using user.id
//     // 3. Fetch comments for first post
//     // Return all three
// }
const fetchUser = (id) => new Promise(r => setTimeout(() => r({ id, name: "Alice" }), 1000));
const fetchPosts = (id) => new Promise(r => setTimeout(() => r([{ id: 1, title: "Post 1" }]), 1000));

const fetchComments = (postId) => new Promise(r => setTimeout(() =>  r([{ id: 1, text: "Nice!" }]), 1000));

async function getUserData(userId) {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    return { user, posts, comments };
}

getUserData(1).then(value => console.log(value));
