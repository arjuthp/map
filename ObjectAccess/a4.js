// Question 14: Microservice Configuration


console.log("Q14: Destructure serviceName, database credentials, and payment service URL ");

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

const {serviceName,
    database:{credentials: {username, password}},
    external:{paymentService: {url}}

} = serviceConfig;
console.log(serviceName);
console.log(username);   
console.log(password);     
console.log(url);  