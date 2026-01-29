//  Question 3: Server Configuration


console.log("Q3: Extract app version and Redis host using dot notation");

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

console.log("App Version:", serverConfig.app.version);
console.log("Redis Host:", serverConfig.cache.redis.host);