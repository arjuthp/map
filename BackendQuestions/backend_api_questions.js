// ========================================
// BACKEND API DEVELOPMENT QUESTIONS
// Progressive Difficulty: Beginner → Advanced
// Real-World API Scenarios
// ========================================

console.log("=== BACKEND API DEVELOPMENT PRACTICE QUESTIONS ===\n");

// ==========================================
// BEGINNER LEVEL (Questions 1-3)
// Basic API Concepts & HTTP Methods
// ==========================================

console.log("=== BEGINNER LEVEL ===\n");

// Question 1: Basic REST API Structure
console.log("Q1: Design a basic REST API for a blog system");
console.log("Scenario: Create API endpoints for managing blog posts");
console.log("Define the following endpoints with proper HTTP methods:");
console.log("- Get all posts");
console.log("- Get a specific post by ID");
console.log("- Create a new post");
console.log("- Update an existing post");
console.log("- Delete a post");

// Your solution here:
const blogAPI = {
    // Define your API endpoints here
    // Example: getAllPosts: { method: 'GET', path: '/api/posts' }
};

console.log("\n" + "=".repeat(50) + "\n");

// Question 2: HTTP Status Codes
console.log("Q2: Choose appropriate HTTP status codes for different scenarios");
console.log("Scenario: User management API responses");

const scenarios = [
    "User successfully created",
    "User not found",
    "Invalid email format in request",
    "User successfully updated",
    "Unauthorized access attempt",
    "Server database connection failed",
    "User successfully deleted (no content to return)",
    "Email already exists (conflict)",
    "Request missing required fields",
    "User data retrieved successfully"
];

// Your solution here:
const statusCodes = {
    // Map each scenario to appropriate HTTP status code
    // Example: "User successfully created": 201
};

console.log("\n" + "=".repeat(50) + "\n");

// Question 3: Request/Response Structure
console.log("Q3: Design request and response structures for an e-commerce API");
console.log("Scenario: Product management system");
console.log("Design JSON structures for:");
console.log("- Create product request body");
console.log("- Get product response");
console.log("- Error response format");
console.log("- Paginated products list response");

// Your solution here:
const apiStructures = {
    createProductRequest: {
        // Define the structure for creating a product
    },
    
    getProductResponse: {
        // Define the structure for product data
    },
    
    errorResponse: {
        // Define standard error response format
    },
    
    paginatedProductsResponse: {
        // Define paginated list structure
    }
};

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// INTERMEDIATE LEVEL (Questions 4-7)
// Authentication, Validation & Middleware
// ==========================================

console.log("=== INTERMEDIATE LEVEL ===\n");

// Question 4: JWT Authentication Implementation
console.log("Q4: Implement JWT-based authentication system");
console.log("Scenario: Secure API endpoints with JWT tokens");
console.log("Create functions for:");
console.log("- User login (generate JWT)");
console.log("- Token validation middleware");
console.log("- Protected route handler");

// Your solution here:
function generateJWT(userId, email) {
    // Simulate JWT generation
    // Return a token string
}

function validateJWT(token) {
    // Simulate JWT validation
    // Return decoded payload or throw error
}

function authMiddleware(req, res, next) {
    // Implement authentication middleware
    // Check Authorization header
    // Validate token and attach user to request
}

function protectedRouteHandler(req, res) {
    // Handle protected route
    // Access user data from req.user
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 5: Input Validation & Sanitization
console.log("Q5: Create a comprehensive input validation system");
console.log("Scenario: User registration API with validation");
console.log("Validate and sanitize:");
console.log("- Email format");
console.log("- Password strength (min 8 chars, 1 uppercase, 1 number)");
console.log("- Name (no special characters, max 50 chars)");
console.log("- Age (18-120)");

// Your solution here:
class InputValidator {
    static validateEmail(email) {
        // Implement email validation
    }
    
    static validatePassword(password) {
        // Implement password strength validation
    }
    
    static validateName(name) {
        // Implement name validation
    }
    
    static validateAge(age) {
        // Implement age validation
    }
    
    static validateUserRegistration(userData) {
        // Combine all validations
        // Return { isValid: boolean, errors: [] }
    }
}

// Test data:
const testUser = {
    email: "user@example.com",
    password: "Password123",
    name: "John Doe",
    age: 25
};

console.log("\n" + "=".repeat(50) + "\n");

// Question 6: Rate Limiting Implementation
console.log("Q6: Implement API rate limiting");
console.log("Scenario: Prevent API abuse with rate limiting");
console.log("- Allow 100 requests per hour per IP");
console.log("- Return 429 status when limit exceeded");
console.log("- Include rate limit headers in response");

// Your solution here:
class RateLimiter {
    constructor(maxRequests = 100, windowMs = 3600000) { // 1 hour
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = new Map(); // Store IP -> request data
    }
    
    checkLimit(ip) {
        // Implement rate limiting logic
        // Return { allowed: boolean, remaining: number, resetTime: timestamp }
    }
    
    middleware() {
        // Return Express middleware function
        return (req, res, next) => {
            // Implement rate limiting middleware
        };
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 7: Error Handling Middleware
console.log("Q7: Create comprehensive error handling system");
console.log("Scenario: Centralized error handling for Express API");
console.log("Handle different error types:");
console.log("- Validation errors");
console.log("- Database errors");
console.log("- Authentication errors");
console.log("- Generic server errors");

// Your solution here:
class APIError extends Error {
    constructor(message, statusCode, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
    }
}

function errorHandler(err, req, res, next) {
    // Implement centralized error handling
    // Log errors appropriately
    // Send proper error responses
}

// Custom error types:
class ValidationError extends APIError {
    constructor(message, field) {
        super(message, 400, 'VALIDATION_ERROR');
        this.field = field;
    }
}

class AuthenticationError extends APIError {
    constructor(message = 'Authentication failed') {
        super(message, 401, 'AUTH_ERROR');
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// ADVANCED LEVEL (Questions 8-10)
// Complex API Patterns & Architecture
// ==========================================

console.log("=== ADVANCED LEVEL ===\n");

// Question 8: API Versioning Strategy
console.log("Q8: Implement API versioning system");
console.log("Scenario: Maintain backward compatibility while evolving API");
console.log("Support multiple versions:");
console.log("- v1: Basic user data");
console.log("- v2: Enhanced user data with preferences");
console.log("- v3: User data with social features");
console.log("Implement version detection and routing");

// Your solution here:
class APIVersionManager {
    constructor() {
        this.versions = new Map();
    }
    
    registerVersion(version, handlers) {
        // Register version-specific handlers
    }
    
    getVersionFromRequest(req) {
        // Extract version from header, URL, or query param
    }
    
    routeToVersion(req, res, next) {
        // Route request to appropriate version handler
    }
}

// Version-specific user handlers:
const userHandlersV1 = {
    getUser: (req, res) => {
        // Return basic user data
    }
};

const userHandlersV2 = {
    getUser: (req, res) => {
        // Return user data with preferences
    }
};

const userHandlersV3 = {
    getUser: (req, res) => {
        // Return user data with social features
    }
};

console.log("\n" + "=".repeat(50) + "\n");

// Question 9: Microservices Communication
console.log("Q9: Implement inter-service communication pattern");
console.log("Scenario: Order service needs to communicate with inventory, payment, and shipping services");
console.log("Implement:");
console.log("- Service discovery");
console.log("- Circuit breaker pattern");
console.log("- Request/response correlation");
console.log("- Timeout handling");

// Your solution here:
class ServiceRegistry {
    constructor() {
        this.services = new Map();
    }
    
    register(serviceName, endpoint, healthCheck) {
        // Register a service
    }
    
    discover(serviceName) {
        // Find available service instances
    }
    
    healthCheck() {
        // Check health of registered services
    }
}

class ServiceClient {
    constructor(serviceName, registry) {
        this.serviceName = serviceName;
        this.registry = registry;
        this.circuitBreaker = new CircuitBreaker();
    }
    
    async call(endpoint, data, options = {}) {
        // Make service call with circuit breaker
        // Include correlation ID
        // Handle timeouts
    }
}

class OrderService {
    constructor(serviceRegistry) {
        this.inventoryClient = new ServiceClient('inventory', serviceRegistry);
        this.paymentClient = new ServiceClient('payment', serviceRegistry);
        this.shippingClient = new ServiceClient('shipping', serviceRegistry);
    }
    
    async processOrder(orderData) {
        // Orchestrate order processing across services
        // Handle partial failures
        // Implement compensation patterns
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 10: Advanced API Security & Monitoring
console.log("Q10: Implement comprehensive API security and monitoring");
console.log("Scenario: Production-ready API with security and observability");
console.log("Implement:");
console.log("- Request/response logging");
console.log("- Performance metrics");
console.log("- Security headers");
console.log("- Request tracing");
console.log("- Health check endpoints");

// Your solution here:
class APIMonitor {
    constructor() {
        this.metrics = {
            requests: 0,
            errors: 0,
            responseTime: []
        };
    }
    
    logRequest(req, res, responseTime) {
        // Log request details
        // Update metrics
    }
    
    getMetrics() {
        // Return current metrics
    }
    
    middleware() {
        return (req, res, next) => {
            // Implement monitoring middleware
            const startTime = Date.now();
            
            res.on('finish', () => {
                const responseTime = Date.now() - startTime;
                this.logRequest(req, res, responseTime);
            });
            
            next();
        };
    }
}

class SecurityMiddleware {
    static helmet() {
        // Implement security headers
        return (req, res, next) => {
            // Set security headers
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('X-Frame-Options', 'DENY');
            res.setHeader('X-XSS-Protection', '1; mode=block');
            // Add more security headers
            next();
        };
    }
    
    static cors(options = {}) {
        // Implement CORS middleware
        return (req, res, next) => {
            // Handle CORS headers
            next();
        };
    }
}

class HealthCheck {
    constructor() {
        this.checks = new Map();
    }
    
    addCheck(name, checkFunction) {
        // Add health check
    }
    
    async runChecks() {
        // Run all health checks
        // Return overall health status
    }
    
    endpoint() {
        return async (req, res) => {
            // Health check endpoint handler
        };
    }
}

// Usage example:
const monitor = new APIMonitor();
const healthCheck = new HealthCheck();

// Add health checks:
healthCheck.addCheck('database', async () => {
    // Check database connection
});

healthCheck.addCheck('redis', async () => {
    // Check Redis connection
});

console.log("\n=== END OF API QUESTIONS ===");
console.log("Build a complete API server using these patterns!");