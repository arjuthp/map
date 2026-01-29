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
console.log("EventType:", webhookEvent["event-type"]);
console.log("transaction-id:", webhookEvent["payload-data"]["transaction-id"]);