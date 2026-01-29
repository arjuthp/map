// Question 7: HTTP Headers Processing


console.log("Q7: Extract authorization header and API key using bracket notation");

const requestHeaders = {
    'content-type': 'application/json',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'x-api-key': 'api-key-12345',
    'user-agent': 'PostmanRuntime/7.29.0',
    'x-forwarded-for': '192.168.1.100'
};

console.log("Authorization Header", requestHeaders['authorization']);
console.log("API Key" ,requestHeaders["x-api-key"]);