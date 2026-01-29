// ========================================
// OBJECT DATA EXTRACTION ANSWERS
// Backend-Specific & Real-World Scenarios
// ========================================

// ==========================================
// DOT NOTATION ANSWERS (5)
// ==========================================

console.log("=== DOT NOTATION ANSWERS ===\n");

// Answer 1: Database Configuration Access
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

console.log("A1: Extract the database host and SSL certificate path using dot notation");
const host = dbConfig.host;
const sslCert = dbConfig.ssl.cert;
console.log(`Host: ${host}, SSL Cert: ${sslCert}`);

// Answer 2: API Response Processing
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

console.log("A2: Extract user email and department using dot notation");
const userEmail = apiResponse.data.user.email;
const department = apiResponse.data.user.profile.department;
console.log(`Email: ${userEmail}, Department: ${department}`);

// Answer 3: Server Configuration
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

console.log("A3: Extract app version and Redis host using dot notation");
const appVersion = serverConfig.app.version;
const redisHost = serverConfig.cache.redis.host;
console.log(`App Version: ${appVersion}, Redis Host: ${redisHost}`);

// Answer 4: JWT Token Payload
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

console.log("A4: Extract user role and write permission using dot notation");
const userRole = jwtPayload.user.role;
const writePermission = jwtPayload.user.permissions.write;
console.log(`Role: ${userRole}, Write Permission: ${writePermission}`);

// Answer 5: Microservice Health Check
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

console.log("A5: Extract service status and database response time using dot notation");
const serviceStatus = healthCheck.status;
const dbResponseTime = healthCheck.dependencies.database.responseTime;
console.log(`Service Status: ${serviceStatus}, DB Response Time: ${dbResponseTime}ms`);

// ==========================================
// BRACKET NOTATION ANSWERS (5)
// ==========================================

console.log("\n=== BRACKET NOTATION ANSWERS ===\n");

// Answer 6: Dynamic Environment Variables
const envConfig = {
    'NODE_ENV': 'production',
    'DATABASE_URL': 'postgresql://user:pass@localhost:5432/db',
    'API_KEY': 'sk-1234567890abcdef',
    'REDIS_URL': 'redis://localhost:6379',
    'JWT_SECRET': 'super-secret-key'
};

console.log("A6: Extract DATABASE_URL and JWT_SECRET using bracket notation with variables");
const dbUrlKey = 'DATABASE_URL';
const jwtKey = 'JWT_SECRET';
const databaseUrl = envConfig[dbUrlKey];
const jwtSecret = envConfig[jwtKey];
console.log(`Database URL: ${databaseUrl}, JWT Secret: ${jwtSecret}`);

// Answer 7: HTTP Headers Processing
const requestHeaders = {
    'content-type': 'application/json',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...',
    'x-api-key': 'api-key-12345',
    'user-agent': 'PostmanRuntime/7.29.0',
    'x-forwarded-for': '192.168.1.100'
};

console.log("A7: Extract authorization header and API key using bracket notation");
const authHeader = requestHeaders['authorization'];
const apiKey = requestHeaders['x-api-key'];
console.log(`Auth Header: ${authHeader}, API Key: ${apiKey}`);

// Answer 8: Dynamic Database Query Results
const queryResult = {
    'user_id': 1001,
    'first_name': 'Alice',
    'last_name': 'Johnson',
    'email_address': 'alice@company.com',
    'created_at': '2024-01-15T09:30:00Z',
    'is_active': true
};

console.log("A8: Extract user_id and email_address using bracket notation with dynamic keys");
const userIdField = 'user_id';
const emailField = 'email_address';
const userId = queryResult[userIdField];
const email = queryResult[emailField];
console.log(`User ID: ${userId}, Email: ${email}`);

// Answer 9: API Rate Limiting Data
const rateLimitInfo = {
    'X-RateLimit-Limit': 1000,
    'X-RateLimit-Remaining': 999,
    'X-RateLimit-Reset': 1640995200,
    'X-RateLimit-Window': 3600
};

console.log("A9: Extract rate limit and remaining requests using bracket notation");
const rateLimit = rateLimitInfo['X-RateLimit-Limit'];
const remaining = rateLimitInfo['X-RateLimit-Remaining'];
console.log(`Rate Limit: ${rateLimit}, Remaining: ${remaining}`);

// Answer 10: Webhook Event Data
const webhookEvent = {
    'event-type': 'payment.completed',
    'event-id': 'evt_1234567890',
    'created-timestamp': '2024-01-27T10:30:00Z',
    'payload-data': {
        'transaction-id': 'txn_abcdef123456',
        'amount-cents': 2500
    }
};

console.log("A10: Extract event type and transaction ID using bracket notation");
const eventType = webhookEvent['event-type'];
const transactionId = webhookEvent['payload-data']['transaction-id'];
console.log(`Event Type: ${eventType}, Transaction ID: ${transactionId}`);

// ==========================================
// DESTRUCTURING ANSWERS (5)
// ==========================================

console.log("\n=== DESTRUCTURING ANSWERS ===\n");

// Answer 11: Express.js Request Object
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

console.log("A11: Destructure method, authorization header, user email, and query limit");
const { 
    method, 
    headers: { authorization }, 
    body: { email: bodyEmail }, 
    query: { limit } 
} = expressRequest;
console.log(`Method: ${method}, Auth: ${authorization}, Email: ${bodyEmail}, Limit: ${limit}`);

// Answer 12: MongoDB Document Processing
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

console.log("A12: Destructure _id as userId, firstName, theme, and notifications with default values");
const { 
    _id: userId2, 
    profile: { 
        firstName, 
        settings: { 
            theme = 'light', 
            notifications = false 
        } 
    } 
} = userDocument;
console.log(`User ID: ${userId2}, Name: ${firstName}, Theme: ${theme}, Notifications: ${notifications}`);

// Answer 13: AWS Lambda Event Processing
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

console.log("A13: Destructure httpMethod, API key, requestId, and sourceIp");
const { 
    httpMethod, 
    headers: { 'X-API-Key': xApiKey }, 
    requestContext: { 
        requestId, 
        identity: { sourceIp } 
    } 
} = lambdaEvent;
console.log(`Method: ${httpMethod}, API Key: ${xApiKey}, Request ID: ${requestId}, Source IP: ${sourceIp}`);

// Answer 14: Microservice Configuration
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

console.log("A14: Destructure serviceName, database credentials, and payment service URL with renaming");
const { 
    serviceName: service, 
    database: { 
        credentials: { username: dbUser, password: dbPass } 
    }, 
    external: { 
        paymentService: { url: paymentUrl } 
    } 
} = serviceConfig;
console.log(`Service: ${service}, DB User: ${dbUser}, DB Pass: ${dbPass}, Payment URL: ${paymentUrl}`);

// Answer 15: Redis Cache Response
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

console.log("A15: Destructure cache key, user name and email, theme preference, and hit count");
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

console.log("\n=== END OF ANSWERS ===");