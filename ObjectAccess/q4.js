// Question 4: JWT Token Payload

console.log("Q4: Extract user role and write permission using dot notation");

const jwtPayload = {
    sub: 'user123',
    iat: 1640995200,
    exp: 1641081600,
    user: {
        id: 123,
        role: 'admin',
        permissions: {
            read: true,
            write: true,
            delete: false
        }
    }
};

console.log("User Role:",jwtPayload.user.role);
console.log("Write Permissions:", jwtPayload.user.permissions.write);
