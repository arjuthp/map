// Async/Await - Modern way to work with Promises

// 1. Basic async function
async function fetchData() {
    return "Data fetched!";
}

fetchData().then(data => console.log(data));

// 2. Async function with await
function simulateApiCall() {
    return new Promise(resolve => {
        setTimeout(() => resolve("API response"), 1000);
    });
}

async function getData() {
    try {
        const result = await simulateApiCall();
        console.log("Received:", result);
        return result;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
}

getData();

// 3. Multiple awaits
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: `User ${id}` }), 500);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, title: "Post 1", userId },
            { id: 2, title: "Post 2", userId }
        ]), 800);
    });
}

async function getUserWithPosts(userId) {
    try {
        const user = await getUser(userId);
        const posts = await getPosts(userId);
        return { user, posts };
    } catch (error) {
        console.log("Error fetching data:", error);
        throw error;
    }
}

getUserWithPosts(1).then(data => console.log("User with posts:", data));

// 4. Parallel async operations with Promise.all
async function fetchMultipleUsers() {
    try {
        const [user1, user2, user3] = await Promise.all([
            getUser(1),
            getUser(2),
            getUser(3)
        ]);
        console.log("Multiple users:", [user1, user2, user3]);
        return [user1, user2, user3];
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchMultipleUsers();

// 5. Async arrow function
const asyncArrow = async () => {
    return "Arrow function result";
};

asyncArrow().then(result => console.log(result));
