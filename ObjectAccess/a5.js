// Question 15: Redis Cache Response


console.log("Q15: Destructure cache key, user name and email, theme preference, and hit count");
const cacheResponse = {
    key: 'user:1001:profile',
    value: {
        id: 1001,
        name: 'Alice Smith',
        email: 'alice@company.com',
        lastLogin: '2024-01-27T08:30:00Z',
        preferences: {
            theme: 'light',
            language: 'en',
            timezone: 'UTC'
        }
    },
    ttl: 3600,
    metadata: {
        createdAt: '2024-01-27T10:00:00Z',
        hitCount: 15
    }
};
const { 
    key: cacheKey, 
    value: { 
        name: userName, 
        email: userEmail2, 
        preferences: { theme: userTheme } 
    }, 
    metadata: { hitCount } 
} = cacheResponse;
console.log(`Cache Key: ${cacheKey}, Name: ${userName}, Email: ${userEmail2}, Theme: ${userTheme}, Hit Count: ${hitCount}`);