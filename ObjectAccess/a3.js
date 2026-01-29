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

const {httpMethod,
     headers: { 'X-API-Key': xApiKey },
        requestContext: {
            requestId,
            identity:{
                sourceIp
            }
        }


} =lambdaEvent;

console.log(`Method: ${httpMethod}, API Key: ${xApiKey}, Request ID: ${requestId}, Source IP: ${sourceIp}`);