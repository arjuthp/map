// Question 11: Express.js Request Object

console.log("Q11: Destructure method, authorization header, user email, and query limit");
// Your answer here:
// const { } = expressRequest;

const expressRequest = {
    method: 'POST',
    url: '/api/users',
    headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer token123'
    },
    body: {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
    },
    params: {
        id: '123'
    },
    query: {
        include: 'profile',
        limit: '10'
    }
};

const{method, headers:{authorization},body:{email}, query:{limit}} = expressRequest;
console.log(`Method: ${method}, Auth: ${authorization}, Email: {email}, Query: {limit}`);
