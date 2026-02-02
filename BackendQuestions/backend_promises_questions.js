// ========================================
// BACKEND PROMISES & ASYNC/AWAIT QUESTIONS
// Progressive Difficulty: Beginner → Advanced
// Real-World Backend Scenarios
// ========================================

console.log("=== BACKEND PROMISES & ASYNC/AWAIT PRACTICE QUESTIONS ===\n");

// ==========================================
// BEGINNER LEVEL (Questions 1-3)
// Basic Promise Creation & Handling
// ==========================================

console.log("=== BEGINNER LEVEL ===\n");

// Question 1: Basic Database Connection
console.log("Q1: Create a Promise that simulates connecting to a database");
console.log("Scenario: Your app needs to connect to MongoDB. Create a function that returns a Promise");
console.log("- Resolve after 1 second with: { status: 'connected', db: 'mongodb://localhost:27017' }");
console.log("- Reject with 30% probability: new Error('Connection timeout')");
console.log("- Log 'Connecting to database...' when starting");

// Your solution here:
function connectToDatabase() {
    // Write your code here
}

// Test your function:
// connectToDatabase()
//     .then(result => console.log("Success:", result))
//     .catch(error => console.log("Error:", error.message));

console.log("\n" + "=".repeat(50) + "\n");

// Question 2: Simple API Response Simulation
console.log("Q2: Create a Promise-based function to fetch user data");
console.log("Scenario: Simulate fetching user profile from an API");
console.log("- Function should accept userId as parameter");
console.log("- Resolve after 800ms with: { id: userId, name: 'User' + userId, email: 'user' + userId + '@example.com' }");
console.log("- Reject if userId is not provided: new Error('User ID is required')");

// Your solution here:
function fetchUserProfile(userId) {
    // Write your code here
}

// Test your function:
// fetchUserProfile(123)
//     .then(user => console.log("User:", user))
//     .catch(error => console.log("Error:", error.message));

console.log("\n" + "=".repeat(50) + "\n");

// Question 3: Basic File Reading Simulation
console.log("Q3: Create a Promise to simulate reading a configuration file");
console.log("Scenario: Your server needs to read config.json on startup");
console.log("- Resolve after 500ms with: { port: 3000, env: 'development', debug: true }");
console.log("- Reject with 20% probability: new Error('File not found')");

// Your solution here:
function readConfigFile() {
    // Write your code here
}

// Test your function:
// readConfigFile()
//     .then(config => console.log("Config loaded:", config))
//     .catch(error => console.log("Config error:", error.message));

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// INTERMEDIATE LEVEL (Questions 4-7)
// Promise Chaining & Error Handling
// ==========================================

console.log("=== INTERMEDIATE LEVEL ===\n");

// Question 4: Authentication Flow with Promise Chaining
console.log("Q4: Create an authentication flow using Promise chaining");
console.log("Scenario: User login process - validate credentials → generate token → log activity");
console.log("Create three functions:");
console.log("- validateCredentials(email, password): resolves with userId or rejects");
console.log("- generateToken(userId): resolves with JWT token");
console.log("- logUserActivity(userId, action): resolves with log entry");
console.log("Chain them together for complete login flow");

// Your solution here:
function validateCredentials(email, password) {
    // Write your code here
    // Resolve with userId if email includes '@' and password length > 6
    // Otherwise reject with 'Invalid credentials'
}

function generateToken(userId) {
    // Write your code here
    // Resolve with 'jwt_token_' + userId after 300ms
}

function logUserActivity(userId, action) {
    // Write your code here
    // Resolve with { userId, action, timestamp: new Date().toISOString() }
}

function loginUser(email, password) {
    // Chain the above functions here
    // Return the final promise
}

// Test your function:
// loginUser('user@example.com', 'password123')
//     .then(result => console.log("Login successful:", result))
//     .catch(error => console.log("Login failed:", error.message));

console.log("\n" + "=".repeat(50) + "\n");

// Question 5: Database Transaction Simulation
console.log("Q5: Simulate a database transaction with rollback capability");
console.log("Scenario: Transfer money between accounts - debit → credit → update logs");
console.log("If any step fails, rollback previous operations");
console.log("Create functions for: debitAccount, creditAccount, updateTransactionLog");

// Your solution here:
function debitAccount(accountId, amount) {
    // Write your code here
    // Resolve with { accountId, newBalance: 1000 - amount } if amount <= 1000
    // Reject with 'Insufficient funds' if amount > 1000
}

function creditAccount(accountId, amount) {
    // Write your code here
    // Resolve with { accountId, newBalance: 500 + amount }
    // Reject with 10% probability: 'Account locked'
}

function updateTransactionLog(fromAccount, toAccount, amount) {
    // Write your code here
    // Resolve with transaction record
}

function transferMoney(fromAccount, toAccount, amount) {
    // Implement transaction with error handling and rollback logic
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 6: API Rate Limiting with Retry Logic
console.log("Q6: Implement API call with rate limiting and retry mechanism");
console.log("Scenario: External API has rate limits, implement exponential backoff");
console.log("- First call fails with 'Rate limit exceeded'");
console.log("- Retry after 1s, 2s, 4s delays");
console.log("- Succeed on 4th attempt");

// Your solution here:
function callExternalAPI(endpoint, retryCount = 0) {
    // Write your code here
    // Implement retry logic with exponential backoff
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 7: Async/Await Conversion
console.log("Q7: Convert Promise chains to async/await");
console.log("Scenario: Rewrite the authentication flow from Q4 using async/await");

// Your solution here:
async function loginUserAsync(email, password) {
    // Convert the Promise chain from Q4 to async/await
    // Include proper error handling with try/catch
}

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// ADVANCED LEVEL (Questions 8-10)
// Complex Async Patterns & Error Handling
// ==========================================

console.log("=== ADVANCED LEVEL ===\n");

// Question 8: Parallel Processing with Promise.all
console.log("Q8: Process multiple user registrations in parallel");
console.log("Scenario: Batch user registration - validate all users, then create accounts");
console.log("- Use Promise.all to validate all users simultaneously");
console.log("- If any validation fails, reject entire batch");
console.log("- If all valid, create all accounts in parallel");

const newUsers = [
    { email: 'user1@example.com', password: 'pass123', name: 'User One' },
    { email: 'user2@example.com', password: 'pass456', name: 'User Two' },
    { email: 'user3@example.com', password: 'pass789', name: 'User Three' }
];

// Your solution here:
async function batchRegisterUsers(users) {
    // Implement parallel processing with Promise.all
    // Include validation and account creation phases
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 9: Race Condition Handling
console.log("Q9: Handle race conditions in cache vs database lookup");
console.log("Scenario: Check cache first, fallback to database, update cache");
console.log("- Use Promise.race to timeout cache lookup after 100ms");
console.log("- Fallback to database if cache times out");
console.log("- Update cache with database result");

// Your solution here:
function checkCache(key) {
    // Simulate cache lookup - sometimes slow (200ms), sometimes fast (50ms)
}

function queryDatabase(key) {
    // Simulate database query - always takes 300ms
}

function updateCache(key, value) {
    // Simulate cache update
}

async function getDataWithFallback(key) {
    // Implement cache-first strategy with race condition handling
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 10: Complex Error Recovery System
console.log("Q10: Implement a robust microservice communication system");
console.log("Scenario: Order processing system with multiple service calls");
console.log("- Call inventory service → payment service → shipping service");
console.log("- Implement circuit breaker pattern");
console.log("- Rollback completed operations if any service fails");
console.log("- Retry failed operations with exponential backoff");

// Your solution here:
class CircuitBreaker {
    constructor(threshold = 3, timeout = 60000) {
        this.threshold = threshold;
        this.timeout = timeout;
        this.failureCount = 0;
        this.lastFailureTime = null;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    }

    async call(serviceFunction) {
        // Implement circuit breaker logic
    }
}

async function inventoryService(productId, quantity) {
    // Simulate inventory check and reservation
}

async function paymentService(amount, paymentMethod) {
    // Simulate payment processing
}

async function shippingService(orderId, address) {
    // Simulate shipping arrangement
}

async function processOrder(order) {
    // Implement complete order processing with error recovery
    // Use circuit breaker for each service call
    // Implement rollback mechanism
}

const sampleOrder = {
    id: 'order_123',
    productId: 'prod_456',
    quantity: 2,
    amount: 99.99,
    paymentMethod: 'credit_card',
    shippingAddress: '123 Main St, City, State'
};

// Test your implementation:
// processOrder(sampleOrder)
//     .then(result => console.log("Order processed:", result))
//     .catch(error => console.log("Order failed:", error.message));

console.log("\n=== END OF PROMISES QUESTIONS ===");
console.log("Remember to test each function and handle edge cases!");