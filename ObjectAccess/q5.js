// Question 5: Microservice Health Check


console.log("Q5: Extract service status and database response time using dot notation");

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
console.log("Service Status:", healthCheck.status);
console.log("Database Response Time:", healthCheck.dependencies.database.responseTime);