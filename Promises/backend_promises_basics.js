/*
=============================================================================
                    BACKEND PROMISES - BASIC LEVEL
=============================================================================
Focus: Database operations, file handling, API calls - real backend scenarios
Level: Beginner to Intermediate
*/

console.log("=== BACKEND PROMISES - BASIC EXAMPLES ===\n");

// =============================================================================
//                              10 BASIC EXAMPLES
// =============================================================================

// EXAMPLE 1: Database Connection Simulation
function connectToDatabase() {
    return new Promise((resolve, reject) => {
        console.log("Connecting to database...");
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            if (success) {
                resolve({ status: "connected", connectionId: "db_123" });
            } else {
                reject(new Error("Database connection failed"));
            }
        }, 1000);
    });
}

// EXAMPLE 2: User Authentication
function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log(`Authenticating user: ${username}`);
        setTimeout(() => {
            if (username === "admin" && password === "password123") {
                resolve({ 
                    userId: 1, 
                    username: "admin", 
                    role: "administrator",
                    token: "jwt_token_123" 
                });
            } else {
                reject(new Error("Invalid credentials"));
            }
        }, 800);
    });
}

// EXAMPLE 3: File Reading Operation
function readConfigFile(filename) {
    return new Promise((resolve, reject) => {
        console.log(`Reading config file: ${filename}`);
        setTimeout(() => {
            if (filename.endsWith('.json')) {
                resolve({
                    database: { host: "localhost", port: 5432 },
                    server: { port: 3000, env: "development" }
                });
            } else {
                reject(new Error("Invalid file format. Expected .json"));
            }
        }, 500);
    });
}

// EXAMPLE 4: API Request to External Service
function fetchUserFromAPI(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching user ${userId} from external API...`);
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`,
                    active: true
                });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1200);
    });
}

// EXAMPLE 5: Email Sending Service
function sendEmail(to, subject, body) {
    return new Promise((resolve, reject) => {
        console.log(`Sending email to: ${to}`);
        setTimeout(() => {
            if (to.includes('@')) {
                resolve({
                    messageId: "msg_" + Date.now(),
                    status: "sent",
                    recipient: to
                });
            } else {
                reject(new Error("Invalid email address"));
            }
        }, 1500);
    });
}

// EXAMPLE 6: Cache Operations
function getFromCache(key) {
    return new Promise((resolve, reject) => {
        console.log(`Getting ${key} from cache...`);
        setTimeout(() => {
            const cached = Math.random() > 0.5; // 50% cache hit
            if (cached) {
                resolve({ key, value: `cached_value_${key}`, ttl: 300 });
            } else {
                reject(new Error("Cache miss"));
            }
        }, 100);
    });
}

// EXAMPLE 7: Database Query
function queryUsers(limit = 10) {
    return new Promise((resolve, reject) => {
        console.log(`Querying users with limit: ${limit}`);
        setTimeout(() => {
            if (limit > 0 && limit <= 100) {
                const users = Array.from({ length: Math.min(limit, 5) }, (_, i) => ({
                    id: i + 1,
                    name: `User ${i + 1}`,
                    email: `user${i + 1}@example.com`
                }));
                resolve(users);
            } else {
                reject(new Error("Invalid limit. Must be between 1 and 100"));
            }
        }, 800);
    });
}

// EXAMPLE 8: File Upload Processing
function processFileUpload(filename, size) {
    return new Promise((resolve, reject) => {
        console.log(`Processing file upload: ${filename} (${size} bytes)`);
        setTimeout(() => {
            if (size <= 5000000) { // 5MB limit
                resolve({
                    filename,
                    size,
                    url: `/uploads/${filename}`,
                    uploadedAt: new Date().toISOString()
                });
            } else {
                reject(new Error("File too large. Maximum size is 5MB"));
            }
        }, 2000);
    });
}

// EXAMPLE 9: Payment Processing
function processPayment(amount, cardToken) {
    return new Promise((resolve, reject) => {
        console.log(`Processing payment: $${amount}`);
        setTimeout(() => {
            if (amount > 0 && cardToken.startsWith('tok_')) {
                resolve({
                    transactionId: "txn_" + Date.now(),
                    amount,
                    status: "completed",
                    processedAt: new Date().toISOString()
                });
            } else {
                reject(new Error("Invalid payment details"));
            }
        }, 1800);
    });
}

// EXAMPLE 10: Log Writing
function writeToLog(level, message) {
    return new Promise((resolve, reject) => {
        console.log(`Writing to log [${level}]: ${message}`);
        setTimeout(() => {
            const validLevels = ['info', 'warn', 'error', 'debug'];
            if (validLevels.includes(level)) {
                resolve({
                    timestamp: new Date().toISOString(),
                    level,
                    message,
                    written: true
                });
            } else {
                reject(new Error("Invalid log level"));
            }
        }, 200);
    });
}

// =============================================================================
//                              6 PRACTICE QUESTIONS
// =============================================================================

console.log("\n=== BACKEND PROMISES - PRACTICE QUESTIONS ===\n");

// QUESTION 1: Basic Promise Creation
console.log("QUESTION 1: Create a promise that simulates checking server health");
console.log("Requirements:");
console.log("- Should resolve with server status after 1 second");
console.log("- Include: status, uptime, memory usage");
console.log("- Should reject if server is down (simulate 20% failure rate)");

function question1_checkServerHealth() {
    // YOUR CODE HERE
    // Create a promise that checks server health
    // Resolve with: { status: 'healthy', uptime: 3600, memoryUsage: '45%' }
    // Or reject with: Error('Server is down')
}

// QUESTION 2: Promise Consumption with Error Handling
console.log("\nQUESTION 2: Use the authenticateUser function with proper error handling");
console.log("Requirements:");
console.log("- Try to authenticate with username 'testuser' and password 'wrongpass'");
console.log("- Handle both success and failure cases");
console.log("- Log appropriate messages for each case");

function question2_handleAuthentication() {
    // YOUR CODE HERE
    // Use authenticateUser function and handle the result
    // Handle both success and error cases with appropriate logging
}

// QUESTION 3: Promise Chaining
console.log("\nQUESTION 3: Chain database connection -> user query -> log writing");
console.log("Requirements:");
console.log("- First connect to database");
console.log("- Then query users (limit 5)");
console.log("- Finally write success log");
console.log("- Handle errors at each step");

function question3_chainDatabaseOperations() {
    // YOUR CODE HERE
    // Chain: connectToDatabase() -> queryUsers(5) -> writeToLog('info', 'Users fetched successfully')
    // Handle errors appropriately
}

// QUESTION 4: Multiple Promises with Promise.all
console.log("\nQUESTION 4: Load application startup data simultaneously");
console.log("Requirements:");
console.log("- Load config file, connect to database, and check cache simultaneously");
console.log("- Use Promise.all to wait for all operations");
console.log("- Handle the case where any operation fails");

function question4_loadStartupData() {
    // YOUR CODE HERE
    // Use Promise.all with: readConfigFile('app.json'), connectToDatabase(), getFromCache('startup')
    // Handle success and failure cases
}

// QUESTION 5: Promise with Conditional Logic
console.log("\nQUESTION 5: Create a user registration process");
console.log("Requirements:");
console.log("- Check if email is valid (contains @)");
console.log("- If valid, simulate saving to database (resolve after 1s)");
console.log("- If invalid, reject immediately");
console.log("- Return user object with id, email, createdAt");

function question5_registerUser(email) {
    // YOUR CODE HERE
    // Create a promise that validates email and simulates user creation
    // Resolve with: { id: randomId, email, createdAt: timestamp }
    // Reject with: Error('Invalid email format')
}

// QUESTION 6: Error Recovery Pattern
console.log("\nQUESTION 6: Implement cache-with-fallback pattern");
console.log("Requirements:");
console.log("- Try to get data from cache first");
console.log("- If cache fails, fetch from API as fallback");
console.log("- If both fail, return default data");
console.log("- Log each attempt");

function question6_cacheWithFallback(userId) {
    // YOUR CODE HERE
    // Try getFromCache(`user_${userId}`) first
    // If that fails, try fetchUserFromAPI(userId)
    // If both fail, return { id: userId, name: 'Guest User', source: 'default' }
    // Log each step
}

// =============================================================================
//                              SOLUTION EXAMPLES
// =============================================================================

console.log("\n=== SOLUTION EXAMPLES ===\n");

// Example solutions (uncomment to test):

// Solution 1:
function solution1_checkServerHealth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isHealthy = Math.random() > 0.2; // 80% healthy
            if (isHealthy) {
                resolve({
                    status: 'healthy',
                    uptime: Math.floor(Math.random() * 10000),
                    memoryUsage: Math.floor(Math.random() * 100) + '%'
                });
            } else {
                reject(new Error('Server is down'));
            }
        }, 1000);
    });
}

// Solution 2:
function solution2_handleAuthentication() {
    authenticateUser('testuser', 'wrongpass')
        .then(user => {
            console.log('Authentication successful:', user);
        })
        .catch(error => {
            console.log('Authentication failed:', error.message);
        });
}

// Solution 3:
function solution3_chainDatabaseOperations() {
    connectToDatabase()
        .then(connection => {
            console.log('Database connected:', connection);
            return queryUsers(5);
        })
        .then(users => {
            console.log('Users fetched:', users.length);
            return writeToLog('info', 'Users fetched successfully');
        })
        .then(logResult => {
            console.log('Log written:', logResult);
        })
        .catch(error => {
            console.log('Operation failed:', error.message);
        });
}

// Test the examples
console.log("Testing basic examples...");

// Test Example 1
connectToDatabase()
    .then(result => console.log("DB Connection:", result))
    .catch(error => console.log("DB Error:", error.message));

// Test Example 2
authenticateUser("admin", "password123")
    .then(user => console.log("Auth Success:", user))
    .catch(error => console.log("Auth Error:", error.message));

console.log("\n=== Practice these questions to master backend Promise basics! ===");