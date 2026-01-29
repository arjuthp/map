// Question 9: API Rate Limiting Data
const rateLimitInfo = {
    'X-RateLimit-Limit': 1000,
    'X-RateLimit-Remaining': 999,
    'X-RateLimit-Reset': 1640995200,
    'X-RateLimit-Window': 3600
};

console.log("Q9: Extract rate limit and remaining requests using bracket notation");
console.log('RateLimit:', rateLimitInfo["X-RateLimit-Limit"]);
console.log('RemainingRequest:', rateLimitInfo["X-RateLimit-Remaining"]);