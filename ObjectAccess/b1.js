// Question 6: Dynamic Environment Variables
const envConfig = {
    'NODE_ENV': 'production',
    'DATABASE_URL': 'postgresql://user:pass@localhost:5432/db',
    'API_KEY': 'sk-1234567890abcdef',
    'REDIS_URL': 'redis://localhost:6379',
    'JWT_SECRET': 'super-secret-key'
};

console.log("Q6: Extract DATABASE_URL and JWT_SECRET using bracket notation with variables");
// const dbUrlKey = 'DATABASE_URL';
// const jwtKey = 'JWT_SECRET';

const dbUrlKey = envConfig['DATABASE_URL'];
const jwtKey = envConfig['JWT_SECRET'];
console.log(dbUrlKey);
console.log(jwtKey);