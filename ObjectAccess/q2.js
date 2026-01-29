
// Question 2: API Response Processing


console.log("Q2: Extract user email and department using dot notation");

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

console.log("Email:", apiResponse.data.user.email);
console.log("department:", apiResponse.data.user.profile.department);