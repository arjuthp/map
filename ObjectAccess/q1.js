// Question 1: Database Configuration Access

console.log("Q1: Extract the database host and SSL certificate path using dot notation");
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

console.log("host:", dbConfig.host);
console.log("database:", dbConfig.database);
console.log("SSL Certification:" , dbConfig.ssl.cert);
