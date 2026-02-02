// ========================================
// BACKEND EVENT LOOP & ASYNCHRONOUS QUESTIONS
// Progressive Difficulty: Beginner → Advanced
// Real-World Backend Scenarios
// ========================================

console.log("=== BACKEND EVENT LOOP & ASYNCHRONOUS PRACTICE QUESTIONS ===\n");

// ==========================================
// BEGINNER LEVEL (Questions 1-3)
// Basic Event Loop Understanding
// ==========================================

console.log("=== BEGINNER LEVEL ===\n");

// Question 1: Event Loop Execution Order
console.log("Q1: Predict the output order of this code");
console.log("Scenario: Understanding basic event loop phases");

function question1() {
    console.log("1. Start");
    
    setTimeout(() => {
        console.log("2. Timeout 1");
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("3. Promise 1");
    });
    
    console.log("4. End");
    
    setTimeout(() => {
        console.log("5. Timeout 2");
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("6. Promise 2");
    });
}

// Your task: Write the expected output order
const expectedOutput1 = [
    // Fill in the expected order of console.log outputs
];

console.log("\n" + "=".repeat(50) + "\n");

// Question 2: Microtasks vs Macrotasks
console.log("Q2: Identify microtasks and macrotasks in server operations");
console.log("Scenario: Web server handling multiple operations");

function question2() {
    console.log("Server starting...");
    
    // File system operation
    require('fs').readFile('config.json', (err, data) => {
        console.log("Config file read");
    });
    
    // Database query simulation
    setImmediate(() => {
        console.log("Database query executed");
    });
    
    // Promise-based operation
    Promise.resolve().then(() => {
        console.log("Authentication check completed");
    });
    
    // Timer operation
    setTimeout(() => {
        console.log("Cache cleanup scheduled");
    }, 0);
    
    // Another promise
    Promise.resolve().then(() => {
        console.log("Request validation completed");
    });
    
    console.log("Server initialization complete");
}

// Your task: Categorize each operation
const operationTypes = {
    microtasks: [
        // List microtask operations
    ],
    macrotasks: [
        // List macrotask operations
    ],
    synchronous: [
        // List synchronous operations
    ]
};

console.log("\n" + "=".repeat(50) + "\n");

// Question 3: Basic Non-blocking I/O
console.log("Q3: Implement non-blocking file operations");
console.log("Scenario: Read multiple configuration files without blocking");

const fs = require('fs').promises;

async function question3() {
    console.log("Loading configurations...");
    
    // Your task: Implement non-blocking file reading
    // Read these files concurrently: 'app.json', 'db.json', 'cache.json'
    // Handle errors gracefully
    // Return combined configuration object
    
    // Simulate file contents:
    const mockFiles = {
        'app.json': { port: 3000, env: 'development' },
        'db.json': { host: 'localhost', port: 5432 },
        'cache.json': { redis: 'localhost:6379' }
    };
    
    // Your implementation here:
    async function loadConfigurations() {
        // Implement concurrent file reading
    }
    
    return loadConfigurations();
}

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// INTERMEDIATE LEVEL (Questions 4-7)
// Advanced Async Patterns & Performance
// ==========================================

console.log("=== INTERMEDIATE LEVEL ===\n");

// Question 4: Event Loop Blocking Detection
console.log("Q4: Identify and fix event loop blocking code");
console.log("Scenario: Server performance issues due to blocking operations");

function question4() {
    // Problematic code that blocks the event loop:
    function blockingOperation() {
        console.log("Starting CPU-intensive task...");
        
        // Simulate heavy computation
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += Math.random();
        }
        
        console.log("CPU-intensive task completed");
        return result;
    }
    
    // Your task: Refactor this to be non-blocking
    function nonBlockingOperation() {
        // Implement non-blocking version using:
        // 1. Worker threads
        // 2. Process.nextTick for yielding
        // 3. Chunked processing
    }
    
    // Test scenario:
    console.log("Server handling requests...");
    
    setTimeout(() => {
        console.log("Request 1 processed");
    }, 10);
    
    blockingOperation(); // This blocks other operations
    
    setTimeout(() => {
        console.log("Request 2 processed");
    }, 10);
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 5: Promise Pool Implementation
console.log("Q5: Implement a promise pool for concurrent operations");
console.log("Scenario: Process large number of database operations with limited concurrency");

class PromisePool {
    constructor(concurrency = 5) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    async add(promiseFunction) {
        // Your implementation here:
        // 1. Add promise to queue if at concurrency limit
        // 2. Execute immediately if under limit
        // 3. Process queue when promises complete
    }
    
    async drain() {
        // Wait for all promises to complete
    }
}

// Test scenario:
async function question5() {
    const pool = new PromisePool(3); // Max 3 concurrent operations
    
    // Simulate database operations
    const dbOperations = Array.from({ length: 10 }, (_, i) => 
        () => new Promise(resolve => {
            console.log(`Starting DB operation ${i + 1}`);
            setTimeout(() => {
                console.log(`Completed DB operation ${i + 1}`);
                resolve(`Result ${i + 1}`);
            }, Math.random() * 1000);
        })
    );
    
    // Your task: Use the promise pool to execute all operations
    // with maximum 3 concurrent operations
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 6: Event Emitter Pattern
console.log("Q6: Implement event-driven architecture for order processing");
console.log("Scenario: Order processing system with multiple event handlers");

const EventEmitter = require('events');

class OrderProcessor extends EventEmitter {
    constructor() {
        super();
        this.orders = new Map();
    }
    
    async processOrder(orderData) {
        // Your implementation:
        // 1. Emit 'order:created' event
        // 2. Validate order (emit 'order:validated' or 'order:invalid')
        // 3. Process payment (emit 'payment:processed' or 'payment:failed')
        // 4. Update inventory (emit 'inventory:updated')
        // 5. Emit 'order:completed' or 'order:failed'
    }
}

// Event handlers:
function setupOrderEventHandlers(processor) {
    // Your task: Set up event handlers for:
    // - Logging all order events
    // - Sending email notifications
    // - Updating analytics
    // - Error handling and rollback
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 7: Stream Processing
console.log("Q7: Implement streaming data processing");
console.log("Scenario: Process large CSV file without loading entire file into memory");

const { Readable, Transform, Writable } = require('stream');

class CSVProcessor {
    constructor() {
        // Your implementation
    }
    
    createReadStream(filePath) {
        // Create readable stream for CSV file
    }
    
    createTransformStream() {
        // Transform CSV rows to JSON objects
        // Apply data validation and transformation
    }
    
    createWriteStream(outputPath) {
        // Write processed data to output file
    }
    
    async processFile(inputPath, outputPath) {
        // Your task: Chain streams together
        // Handle backpressure and errors
        // Provide progress updates
    }
}

console.log("\n" + "=".repeat(50) + "\n");

// ==========================================
// ADVANCED LEVEL (Questions 8-10)
// Complex Async Patterns & Optimization
// ==========================================

console.log("=== ADVANCED LEVEL ===\n");

// Question 8: Custom Event Loop Monitoring
console.log("Q8: Implement event loop lag monitoring");
console.log("Scenario: Monitor and alert on event loop performance issues");

class EventLoopMonitor {
    constructor(options = {}) {
        this.threshold = options.threshold || 10; // ms
        this.interval = options.interval || 1000; // ms
        this.callbacks = [];
        this.isMonitoring = false;
    }
    
    start() {
        // Your implementation:
        // 1. Use setInterval to measure event loop lag
        // 2. Compare expected vs actual timing
        // 3. Trigger callbacks when threshold exceeded
        // 4. Collect performance metrics
    }
    
    stop() {
        // Stop monitoring
    }
    
    onLag(callback) {
        // Register callback for lag events
    }
    
    getMetrics() {
        // Return performance metrics
    }
}

// Usage:
function question8() {
    const monitor = new EventLoopMonitor({ threshold: 5 });
    
    monitor.onLag((lag) => {
        console.log(`Event loop lag detected: ${lag}ms`);
        // Your task: Implement alerting/logging
    });
    
    monitor.start();
    
    // Simulate various workloads and measure impact
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 9: Advanced Async Iterator Pattern
console.log("Q9: Implement async iterator for paginated API data");
console.log("Scenario: Fetch all pages of data from paginated API efficiently");

class PaginatedAPIIterator {
    constructor(baseUrl, options = {}) {
        this.baseUrl = baseUrl;
        this.pageSize = options.pageSize || 100;
        this.maxConcurrent = options.maxConcurrent || 3;
        this.currentPage = 1;
        this.hasMore = true;
        this.cache = new Map();
    }
    
    async *[Symbol.asyncIterator]() {
        // Your implementation:
        // 1. Fetch pages asynchronously
        // 2. Implement prefetching for performance
        // 3. Handle rate limiting and retries
        // 4. Yield individual items, not pages
    }
    
    async fetchPage(pageNumber) {
        // Simulate API call with potential failures
        // Implement retry logic and caching
    }
}

// Usage:
async function question9() {
    const iterator = new PaginatedAPIIterator('/api/users', {
        pageSize: 50,
        maxConcurrent: 2
    });
    
    // Your task: Process all users efficiently
    // Handle errors and implement progress tracking
}

console.log("\n" + "=".repeat(50) + "\n");

// Question 10: Distributed Task Queue
console.log("Q10: Implement distributed task processing system");
console.log("Scenario: Process background tasks across multiple worker processes");

class TaskQueue {
    constructor(options = {}) {
        this.concurrency = options.concurrency || 5;
        this.retryAttempts = options.retryAttempts || 3;
        this.retryDelay = options.retryDelay || 1000;
        this.tasks = [];
        this.processing = new Set();
        this.completed = new Map();
        this.failed = new Map();
    }
    
    async add(taskType, payload, options = {}) {
        // Add task to queue with priority and scheduling
    }
    
    async process(taskType, handler) {
        // Register task handler
    }
    
    async start() {
        // Start processing tasks
        // Implement worker management
        // Handle task distribution and load balancing
    }
    
    async stop() {
        // Graceful shutdown
    }
    
    getStats() {
        // Return queue statistics
    }
}

// Task handlers:
const taskHandlers = {
    'send-email': async (payload) => {
        // Simulate email sending
        console.log(`Sending email to ${payload.to}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    },
    
    'process-image': async (payload) => {
        // Simulate image processing
        console.log(`Processing image ${payload.imageId}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
    },
    
    'generate-report': async (payload) => {
        // Simulate report generation
        console.log(`Generating report ${payload.reportId}`);
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
};

async function question10() {
    const queue = new TaskQueue({ concurrency: 3 });
    
    // Register handlers
    Object.entries(taskHandlers).forEach(([type, handler]) => {
        queue.process(type, handler);
    });
    
    // Your task: 
    // 1. Add various tasks to the queue
    // 2. Implement priority handling
    // 3. Handle worker failures and recovery
    // 4. Implement task scheduling (delayed execution)
    // 5. Add monitoring and metrics
    
    await queue.start();
    
    // Add sample tasks
    await queue.add('send-email', { to: 'user@example.com', subject: 'Welcome' });
    await queue.add('process-image', { imageId: 'img_123' });
    await queue.add('generate-report', { reportId: 'report_456' });
}

console.log("\n=== END OF EVENT LOOP QUESTIONS ===");
console.log("Master the event loop for high-performance backend applications!");