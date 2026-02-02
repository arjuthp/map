// ========================================
// BACKEND OBJECT ACCESS & MANIPULATION QUESTIONS
// Progressive Difficulty: Beginner → Advanced
// Real-World Backend Scenarios
// ========================================

console.log("=== BACKEND OBJECT ACCESS & MANIPULATION PRACTICE QUESTIONS ===\n");

// ==========================================
// BEGINNER LEVEL (Questions 1-3)
// Basic Object Operations
// ==========================================

console.log("=== BEGINNER LEVEL ===\n");

// Question 1: Server Configuration Management
console.log("Q1: Extract and validate server configuration");
console.log("Scenario: Parse server configuration from environment variables");

const serverConfig = {
    app: {
        name: 'UserService',
        version: '2.1.0',
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    },
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        name: process.env.DB_NAME || 'userdb',
        credentials: {
            username: process.env.DB_USER || 'admin',
            password: process.env.DB_PASS || 'secret'
        }
    },
    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASS || null
    }
};

// Your task: Extract configuration values using different access methods
function extractConfig(config) {
    // Use dot notation to extract:
    const appName = // Extract app name
    const appPort = // Extract app port
    
    // Use bracket notation to extract:
    const dbHost = // Extract database host
    const dbUser = // Extract database username
    
    // Use destructuring to extract:
    const { } = config; // Extract app version, environment, redis host
    
    return {
        appName,
        appPort,
        dbHost,
        dbUser,
        // Add destructured values
    };
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 2: API Request Processing
console.log("Q2: Process incoming API request data");
console.log("Scenario: Extract and validate data from Express.js request object");

const expressRequest = {
    method: 'POST',
    url: '/api/users',
    headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
        'x-api-key': 'api-key-12345',
        'user-agent': 'PostmanRuntime/7.29.0'
    },
    body: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        age: 30,
        preferences: {
            theme: 'dark',
            notifications: true,
            language: 'en'
        }
    },
    params: {
        id: '123'
    },
    query: {
        include: 'profile,settings',
        limit: '10',
        offset: '0'
    }
};

// Your task: Extract request data for processing
function processRequest(req) {
    // Extract using dot notation:
    const method = // Extract HTTP method
    const contentType = // Extract content type header
    
    // Extract using bracket notation with variables:
    const authHeader = req.headers['authorization'];
    const apiKey = // Extract API key header
    
    // Extract using destructuring:
    const { } = req.body; // Extract firstName, email, and preferences
    const { } = req.query; // Extract include and limit with defaults
    
    return {
        method,
        contentType,
        authHeader,
        apiKey,
        // Add extracted values
    };
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 3: Database Query Result Processing
console.log("Q3: Process database query results");
console.log("Scenario: Transform raw database results into API response format");

const dbQueryResult = {
    rows: [
        {
            user_id: 1001,
            first_name: 'Alice',
            last_name: 'Johnson',
            email_address: 'alice@company.com',
            created_at: '2024-01-15T09:30:00Z',
            is_active: true,
            profile_data: {
                avatar_url: 'https://example.com/avatar1.jpg',
                bio: 'Software Engineer',
                social_links: {
                    linkedin: 'https://linkedin.com/in/alice',
                    github: 'https://github.com/alice'
                }
            }
        },
        {
            user_id: 1002,
            first_name: 'Bob',
            last_name: 'Smith',
            email_address: 'bob@company.com',
            created_at: '2024-01-16T10:15:00Z',
            is_active: false,
            profile_data: {
                avatar_url: 'https://example.com/avatar2.jpg',
                bio: 'Product Manager',
                social_links: {
                    linkedin: 'https://linkedin.com/in/bob',
                    twitter: 'https://twitter.com/bob'
                }
            }
        }
    ],
    metadata: {
        total_count: 2,
        page: 1,
        per_page: 10
    }
};

// Your task: Transform database results to API format
function transformDbResults(result) {
    // Transform each row using destructuring and object manipulation
    const users = result.rows.map(row => {
        // Destructure row data
        const { } = row; // Extract user_id as id, first_name, last_name, etc.
        
        // Transform to API format
        return {
            // Create user object with camelCase properties
        };
    });
    
    // Extract metadata
    const { } = result.metadata; // Destructure metadata
    
    return {
        users,
        pagination: {
            // Transform metadata to pagination info
        }
    };
}

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// INTERMEDIATE LEVEL (Questions 4-7)
// Dynamic Object Operations & Validation
// ==========================================

console.log("=== INTERMEDIATE LEVEL ===\n");

// Question 4: Dynamic Configuration Loader
console.log("Q4: Implement dynamic configuration loading with environment overrides");
console.log("Scenario: Load configuration with environment-specific overrides");

const baseConfig = {
    server: {
        port: 3000,
        host: 'localhost',
        ssl: false
    },
    database: {
        host: 'localhost',
        port: 5432,
        pool: {
            min: 2,
            max: 10
        }
    },
    cache: {
        ttl: 3600,
        maxSize: 1000
    }
};

const environmentOverrides = {
    production: {
        server: {
            port: 8080,
            ssl: true
        },
        database: {
            host: 'prod-db.company.com',
            pool: {
                min: 5,
                max: 50
            }
        }
    },
    staging: {
        server: {
            port: 4000
        },
        database: {
            host: 'staging-db.company.com'
        }
    }
};

// Your task: Implement configuration merging
function loadConfiguration(environment = 'development') {
    // Deep merge base config with environment overrides
    // Handle nested objects properly
    // Return final configuration
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 5: Request Validation System
console.log("Q5: Build a flexible request validation system");
console.log("Scenario: Validate API requests with dynamic rules");

const validationRules = {
    createUser: {
        required: ['firstName', 'lastName', 'email'],
        optional: ['age', 'preferences'],
        nested: {
            preferences: {
                required: [],
                optional: ['theme', 'notifications', 'language']
            }
        },
        types: {
            firstName: 'string',
            lastName: 'string',
            email: 'email',
            age: 'number',
            'preferences.theme': 'string',
            'preferences.notifications': 'boolean'
        }
    },
    updateUser: {
        required: ['id'],
        optional: ['firstName', 'lastName', 'email', 'age'],
        types: {
            id: 'number',
            firstName: 'string',
            lastName: 'string',
            email: 'email',
            age: 'number'
        }
    }
};

class RequestValidator {
    constructor(rules) {
        this.rules = rules;
    }
    
    validate(data, ruleName) {
        // Your implementation:
        // 1. Check required fields exist
        // 2. Validate field types
        // 3. Handle nested object validation
        // 4. Return validation result with errors
    }
    
    validateField(value, type, fieldPath) {
        // Implement field-specific validation
        // Handle different types: string, number, email, boolean, etc.
    }
    
    extractNestedValue(obj, path) {
        // Extract value from nested object using dot notation path
        // Example: extractNestedValue(obj, 'preferences.theme')
    }
}

// Test data:
const testRequests = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        age: 30,
        preferences: {
            theme: 'dark',
            notifications: true
        }
    },
    {
        firstName: 'Jane',
        email: 'invalid-email',
        age: 'not-a-number'
    }
];

console.log("\n" + "=".repeat(50) + "\n");

// Question 6: Object Transformation Pipeline
console.log("Q6: Create object transformation pipeline for data processing");
console.log("Scenario: Transform data through multiple processing stages");

const rawUserData = {
    user_id: 1001,
    first_name: 'John',
    last_name: 'Doe',
    email_address: 'JOHN@EXAMPLE.COM',
    phone_number: '+1-555-123-4567',
    birth_date: '1990-05-15',
    address_info: {
        street_address: '123 Main St',
        city_name: 'New York',
        state_code: 'NY',
        zip_code: '10001',
        country_code: 'US'
    },
    account_settings: {
        is_email_verified: 'true',
        is_phone_verified: 'false',
        marketing_opt_in: '1',
        created_timestamp: '2024-01-15T09:30:00Z'
    }
};

class DataTransformer {
    constructor() {
        this.transformations = [];
    }
    
    addTransformation(name, transformFn) {
        this.transformations.push({ name, transformFn });
        return this; // Enable chaining
    }
    
    transform(data) {
        // Apply all transformations in sequence
        return this.transformations.reduce((result, { name, transformFn }) => {
            try {
                return transformFn(result);
            } catch (error) {
                console.error(`Transformation '${name}' failed:`, error.message);
                return result;
            }
        }, data);
    }
}

// Your task: Implement transformation functions
const userTransformer = new DataTransformer()
    .addTransformation('camelCase', (data) => {
        // Convert snake_case keys to camelCase
    })
    .addTransformation('normalizeEmail', (data) => {
        // Normalize email to lowercase
    })
    .addTransformation('parseBoolean', (data) => {
        // Convert string booleans to actual booleans
    })
    .addTransformation('formatPhone', (data) => {
        // Format phone number consistently
    })
    .addTransformation('calculateAge', (data) => {
        // Calculate age from birth_date
    });

console.log("\n" + "=".repeat(50) + "\n");

// Question 7: Advanced Object Querying
console.log("Q7: Implement MongoDB-style object querying");
console.log("Scenario: Query objects using MongoDB-like syntax");

const users = [
    {
        id: 1,
        name: 'Alice Johnson',
        age: 28,
        department: 'Engineering',
        skills: ['JavaScript', 'Python', 'React'],
        address: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        },
        salary: 95000,
        isActive: true
    },
    {
        id: 2,
        name: 'Bob Smith',
        age: 35,
        department: 'Marketing',
        skills: ['SEO', 'Content Marketing', 'Analytics'],
        address: {
            city: 'New York',
            state: 'NY',
            country: 'USA'
        },
        salary: 75000,
        isActive: false
    },
    {
        id: 3,
        name: 'Carol Davis',
        age: 42,
        department: 'Engineering',
        skills: ['Java', 'Spring', 'Microservices'],
        address: {
            city: 'Austin',
            state: 'TX',
            country: 'USA'
        },
        salary: 110000,
        isActive: true
    }
];

class ObjectQuery {
    constructor(data) {
        this.data = Array.isArray(data) ? data : [data];
    }
    
    find(query) {
        // Implement MongoDB-style querying
        // Support operators: $eq, $ne, $gt, $gte, $lt, $lte, $in, $nin
        // Support nested field queries using dot notation
        // Example: { 'address.city': 'San Francisco', age: { $gte: 25 } }
    }
    
    project(fields) {
        // Implement field projection
        // Support inclusion and exclusion
        // Example: { name: 1, age: 1, _id: 0 }
    }
    
    sort(sortSpec) {
        // Implement sorting
        // Example: { age: -1, name: 1 }
    }
    
    limit(count) {
        // Limit results
        return this;
    }
    
    skip(count) {
        // Skip results
        return this;
    }
    
    execute() {
        // Return final results
        return this.data;
    }
}

// Test queries:
const queryEngine = new ObjectQuery(users);

// Your task: Implement these queries
const engineeringUsers = queryEngine.find({ department: 'Engineering' }).execute();
const highEarners = queryEngine.find({ salary: { $gte: 90000 } }).execute();
const activeUsersInCA = queryEngine.find({ 
    isActive: true, 
    'address.state': 'CA' 
}).execute();

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// ADVANCED LEVEL (Questions 8-10)
// Complex Object Patterns & Performance
// ==========================================

console.log("=== ADVANCED LEVEL ===\n");

// Question 8: Object Pool Pattern for Database Connections
console.log("Q8: Implement object pool pattern for resource management");
console.log("Scenario: Manage database connection pool efficiently");

class DatabaseConnection {
    constructor(id, config) {
        this.id = id;
        this.config = config;
        this.isConnected = false;
        this.lastUsed = Date.now();
        this.queryCount = 0;
    }
    
    async connect() {
        // Simulate connection
        this.isConnected = true;
        console.log(`Connection ${this.id} established`);
    }
    
    async disconnect() {
        // Simulate disconnection
        this.isConnected = false;
        console.log(`Connection ${this.id} closed`);
    }
    
    async query(sql) {
        // Simulate query execution
        this.lastUsed = Date.now();
        this.queryCount++;
        return { result: `Query executed on connection ${this.id}` };
    }
}

class ConnectionPool {
    constructor(config = {}) {
        this.minConnections = config.min || 2;
        this.maxConnections = config.max || 10;
        this.idleTimeout = config.idleTimeout || 30000; // 30 seconds
        this.connections = new Map();
        this.available = [];
        this.inUse = new Set();
        this.connectionId = 0;
    }
    
    async initialize() {
        // Create minimum number of connections
    }
    
    async acquire() {
        // Your implementation:
        // 1. Return available connection if exists
        // 2. Create new connection if under max limit
        // 3. Wait for connection to become available
        // 4. Handle connection validation
    }
    
    async release(connection) {
        // Return connection to pool
        // Validate connection health
        // Add to available connections
    }
    
    async cleanup() {
        // Remove idle connections beyond minimum
        // Close connections that exceed idle timeout
    }
    
    getStats() {
        // Return pool statistics
        return {
            total: this.connections.size,
            available: this.available.length,
            inUse: this.inUse.size,
            // Add more stats
        };
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 9: Advanced Object Serialization/Deserialization
console.log("Q9: Implement custom object serialization system");
console.log("Scenario: Serialize complex objects for caching and API responses");

class SerializationManager {
    constructor() {
        this.serializers = new Map();
        this.deserializers = new Map();
    }
    
    registerType(typeName, serializer, deserializer) {
        // Register custom serialization handlers
        this.serializers.set(typeName, serializer);
        this.deserializers.set(typeName, deserializer);
    }
    
    serialize(obj, options = {}) {
        // Your implementation:
        // 1. Handle circular references
        // 2. Support custom serializers for specific types
        // 3. Handle Date, RegExp, Function objects
        // 4. Support field exclusion/inclusion
        // 5. Maintain type information for deserialization
    }
    
    deserialize(serializedData) {
        // Reconstruct objects with proper types
        // Handle custom deserializers
        // Restore object prototypes
    }
    
    clone(obj) {
        // Deep clone using serialization
        return this.deserialize(this.serialize(obj));
    }
}

// Test objects with complex types:
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
        this.preferences = new Map([
            ['theme', 'dark'],
            ['notifications', true]
        ]);
    }
    
    getDisplayName() {
        return `${this.name} <${this.email}>`;
    }
}

const complexObject = {
    user: new User('John Doe', 'john@example.com'),
    metadata: {
        version: '1.0.0',
        tags: new Set(['important', 'user-data']),
        pattern: /^[a-zA-Z0-9]+$/,
        callback: function() { return 'callback executed'; }
    },
    circular: null // Will create circular reference
};
complexObject.circular = complexObject; // Create circular reference

console.log("\n" + "=".repeat(50) + "\n");

// Question 10: High-Performance Object Cache
console.log("Q10: Implement high-performance object cache with advanced features");
console.log("Scenario: Build production-ready cache system with TTL, LRU, and clustering");

class AdvancedCache {
    constructor(options = {}) {
        this.maxSize = options.maxSize || 1000;
        this.defaultTTL = options.defaultTTL || 3600000; // 1 hour
        this.cleanupInterval = options.cleanupInterval || 300000; // 5 minutes
        
        // Storage structures
        this.cache = new Map();
        this.accessOrder = new Map(); // For LRU tracking
        this.expirationTimes = new Map();
        this.stats = {
            hits: 0,
            misses: 0,
            evictions: 0,
            expired: 0
        };
        
        // Start cleanup timer
        this.startCleanup();
    }
    
    set(key, value, ttl = this.defaultTTL) {
        // Your implementation:
        // 1. Handle cache size limits (LRU eviction)
        // 2. Set expiration time
        // 3. Update access order
        // 4. Handle object serialization if needed
        // 5. Update statistics
    }
    
    get(key) {
        // Retrieve value with LRU update
        // Check expiration
        // Update statistics
        // Handle cache warming
    }
    
    delete(key) {
        // Remove from all tracking structures
    }
    
    clear() {
        // Clear all cache data
    }
    
    has(key) {
        // Check if key exists and is not expired
    }
    
    keys() {
        // Return all valid (non-expired) keys
    }
    
    size() {
        // Return current cache size
    }
    
    getStats() {
        // Return cache statistics
        return {
            ...this.stats,
            size: this.cache.size,
            hitRate: this.stats.hits / (this.stats.hits + this.stats.misses) || 0
        };
    }
    
    // Advanced features:
    
    mget(keys) {
        // Multi-get operation
        // Return map of key-value pairs
    }
    
    mset(entries, ttl) {
        // Multi-set operation
        // entries: Map or array of [key, value] pairs
    }
    
    increment(key, delta = 1) {
        // Atomic increment operation
    }
    
    expire(key, ttl) {
        // Update expiration time for existing key
    }
    
    persist(key) {
        // Remove expiration from key
    }
    
    // Internal methods:
    
    evictLRU() {
        // Remove least recently used item
    }
    
    cleanup() {
        // Remove expired items
        // Called periodically
    }
    
    startCleanup() {
        // Start periodic cleanup
        this.cleanupTimer = setInterval(() => {
            this.cleanup();
        }, this.cleanupInterval);
    }
    
    stopCleanup() {
        // Stop cleanup timer
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
        }
    }
}

// Usage example and testing:
async function testAdvancedCache() {
    const cache = new AdvancedCache({
        maxSize: 100,
        defaultTTL: 5000, // 5 seconds
        cleanupInterval: 1000 // 1 second
    });
    
    // Your task: Test all cache features
    // 1. Basic set/get operations
    // 2. TTL expiration
    // 3. LRU eviction
    // 4. Multi-operations
    // 5. Statistics tracking
    // 6. Performance under load
}

console.log("\n=== END OF OBJECT ACCESS QUESTIONS ===");
console.log("Master object manipulation for efficient backend development!");