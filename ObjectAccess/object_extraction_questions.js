// ========================================
// OBJECT DATA EXTRACTION QUESTIONS
// Backend-Specific & Real-World Scenarios
// ========================================

// ==========================================
// DOT NOTATION QUESTIONS (5)
// ==========================================

console.log("=== DOT NOTATION QUESTIONS ===\n");

// Question 1: Database Configuration Access
const dbConfig = {
    host: 'localhost',
    port: 5432,
    database: 'ecommerce_db',
    user: 'admin',
    password: 'secret123',
    ssl: {
        enabled: true,
        cert: '/path/to/cert.pem'
    }
};

console.log("Q1: Extract the database host and SSL certificate path using dot notation");
// Your answer here:
// const host = 
// const sslCert = 

// Question 2: API Response Processing
const apiResponse = {
    status: 200,
    message: 'Success',
    data: {
        user: {
            id: 1001,
            email: 'john@company.com',
            profile: {
                firstName: 'John',
                lastName: 'Doe',
                department: 'Engineering'
            }
        }
    },
    timestamp: '2024-01-27T10:30:00Z'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
};

console.log("Q2: Extract user email and department using dot notation");
// Your answer here:
// const userEmail = 
// const department = 

// Question 3: Server Configuration
const serverConfig = {
    app: {
        name: 'UserService',
        version: '2.1.0',
        port: 3000
    },
    logging: {
        level: 'info',
        file: '/var/log/app.log'
    },
    cache: {
        redis: {
            host: 'redis-cluster.internal',
            port: 6379
        }
    }
};

console.log("Q3: Extract app version and Redis host using dot notation");
// Your answer here:
// const appVersion = 
// const redisHost = 

// Question 4: JWT Token Payload
const jwtPayload = {
    sub: 'user123',
    iat: 1640995200,
    exp: 1641081600,
    user: {
        id: 123,
        role: 'admin',
        permissions: {
            read: true,
            write: true,
            delete: false
        }
    }
};

console.log("Q4: Extract user role and write permission using dot notation");
// Your answer here:
// const userRole = 
// const writePermission = 

// Question 5: Microservice Health Check
const healthCheck = {
    service: 'payment-service',
    status: 'healthy',
    uptime: 86400,
    dependencies: {
        database: {
            status: 'connected',
            responseTime: 45
        },
        redis: {
            status: 'connected',
            responseTime: 12
        }
    }
};

console.log("Q5: Extract service status and database response time using dot notation");
// Your answer here:
// const serviceStatus = 
// const dbResponseTime = 

// ==========================================
// BRACKET NOTATION QUESTIONS (5)
// ==========================================

console.log("\n=== BRACKET NOTATION QUESTIONS ===\n");

// Question 6: Dynamic Environment Variables
const envConfig = {
    'NODE_ENV': 'production',
    'DATABASE_URL': 'postgresql://user:pass@localhost:5432/db',
    'API_KEY': 'sk-1234567890abcdef',
    'REDIS_URL': 'redis://localhost:6379',
    'JWT_SECRET': 'super-secret-key'
};

console.log("Q6: Extract DATABASE_URL and JWT_SECRET using bracket notation with variables");
const dbUrlKey = 'DATABASE_URL';
const jwtKey = 'JWT_SECRET';
// Your answer here:
// const databaseUrl = 
// const jwtSecret = 

// Question 7: HTTP Headers Processing
const requestHeaders = {
    'content-type': 'application/json',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'x-api-key': 'api-key-12345',
    'user-agent': 'PostmanRuntime/7.29.0',
    'x-forwarded-for': '192.168.1.100'
};

console.log("Q7: Extract authorization header and API key using bracket notation");
// Your answer here:
// const authHeader = 
// const apiKey = 

// Question 8: Dynamic Database Query Results
const queryResult = {
    'user_id': 1001,
    'first_name': 'Alice',
    'last_name': 'Johnson',
    'email_address': 'alice@company.com',
    'created_at': '2024-01-15T09:30:00Z',
    'is_active': true
};

console.log("Q8: Extract user_id and email_address using bracket notation with dynamic keys");
const userIdField = 'user_id';
const emailField = 'email_address';
// Your answer here:
// const userId = 
// const email = 

// Question 9: API Rate Limiting Data
const rateLimitInfo = {
    'X-RateLimit-Limit': 1000,
    'X-RateLimit-Remaining': 999,
    'X-RateLimit-Reset': 1640995200,
    'X-RateLimit-Window': 3600
};

console.log("Q9: Extract rate limit and remaining requests using bracket notation");
// Your answer here:
// const rateLimit = 
// const remaining = 

// Question 10: Webhook Event Data
const webhookEvent = {
    'event-type': 'payment.completed',
    'event-id': 'evt_1234567890',
    'created-timestamp': '2024-01-27T10:30:00Z',
    'payload-data': {
        'transaction-id': 'txn_abcdef123456',
        'amount-cents': 2500
    }
};

console.log("Q10: Extract event type and transaction ID using bracket notation");
// Your answer here:
// const eventType = 
// const transactionId = 

// ==========================================
// DESTRUCTURING QUESTIONS (5)
// ==========================================

console.log("\n=== DESTRUCTURING QUESTIONS ===\n");

// Question 11: Express.js Request Object
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

console.log("Q11: Destructure method, authorization header, user email, and query limit");
// Your answer here:
// const { } = expressRequest;

// Question 12: MongoDB Document Processing
const userDocument = {
    _id: '507f1f77bcf86cd799439011',
    username: 'johndoe',
    email: 'john@example.com',
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://example.com/avatar.jpg',
        settings: {
            theme: 'dark',
            notifications: true,
            language: 'en'
        }
    },
    createdAt: new Date('2024-01-15'),
    isActive: true
};

console.log("Q12: Destructure _id as userId, firstName, theme, and notifications with default values");
// Your answer here:
// const { } = userDocument;

// Question 13: AWS Lambda Event Processing
const lambdaEvent = {
    httpMethod: 'POST',
    path: '/api/orders',
    headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'key123'
    },
    body: JSON.stringify({
        productId: 'prod_123',
        quantity: 2,
        customerId: 'cust_456'
    }),
    requestContext: {
        requestId: 'req_789',
        stage: 'prod',
        identity: {
            sourceIp: '192.168.1.1'
        }
    }
};

console.log("Q13: Destructure httpMethod, API key, requestId, and sourceIp");
// Your answer here:
// const { } = lambdaEvent;

// Question 14: Microservice Configuration
const serviceConfig = {
    serviceName: 'order-service',
    version: '1.2.3',
    port: 3001,
    database: {
        host: 'db.internal',
        port: 5432,
        name: 'orders_db',
        credentials: {
            username: 'service_user',
            password: 'secure_pass'
        }
    },
    external: {
        paymentService: {
            url: 'https://payment.api.com',
            timeout: 5000
        },
        notificationService: {
            url: 'https://notify.api.com',
            timeout: 3000
        }
    }
};

console.log("Q14: Destructure serviceName, database credentials, and payment service URL with renaming");
// Your answer here:
// const { } = serviceConfig;

// Question 15: Redis Cache Response
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

console.log("Q15: Destructure cache key, user name and email, theme preference, and hit count");
// Your answer here:
// const { } = cacheResponse;

console.log("\n=== END OF QUESTIONS ===");