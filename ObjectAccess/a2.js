// / Question 12: MongoDB Document Processing
console.log("Q12: Destructure _id as userId, firstName, theme, and notifications with default values");

const userDocument = {
    _id: '507f1f77bcf86cd799439011',
    username: 'johndoe',
    email: 'john@example.com',
    profile: {
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://example.com/avatar.jpg',
        settings: {
            theme: 'dark',
            notifications: true,
            language: 'en'
        }
    },
    createdAt: new Date('2024-01-15'),
    isActive: true
};

const { 
    _id: userId,
    profile: { 
        firstName,
        settings: {
            theme = 'light',
            notifications = false
        }
    }
} = userDocument;
console.log(`User ID: ${userId}, Name: ${firstName}, Theme: ${theme}, Notifications: ${notifications}`);