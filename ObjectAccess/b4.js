
// Question 8: Dynamic Database Query Results

console.log("Q8: Extract user_id and email_address using bracket notation with dynamic keys");
// const userIdField = 'user_id';
// const emailField = 'email_address';
const queryResult = {
    'user_id': 1001,
    'first_name': 'Alice',
    'last_name': 'Johnson',
    'email_address': 'alice@company.com',
    'created_at': '2024-01-15T09:30:00Z',
    'is_active': true
};


console.log(`userfield: ${queryResult["user_id"]}`);
console.log(`email_address: ${queryResult["email_address"]}`);