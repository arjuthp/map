// Q7: Chain with async operations
console.log("\nQ7: Chain: getUser → getPosts → getComments");
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: "Alice" }), 500);
    });
}
function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 500);
    });
}
function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([{ id: 1, text: "Nice!" }]), 500);
    });
}
// Chain them:
getUser(1)
    .then(user =>{console.log("User:", user.name);
    return getPosts(user.id);
}).then(posts =>{
    console.log("Post:", posts);
    return getComments(posts[0].id);
}).then(comments => {
    console.log("Comments:", comments);
});