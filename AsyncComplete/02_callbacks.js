// ============================================
// 02: CALLBACKS - Handling Async Operations
// ============================================

/*
🎯 CORE CONCEPT:
A callback is a function passed as an argument to another function,
to be executed after an async operation completes.

🔑 KEY POINTS:
1. Callback = "Call me back when you're done"
2. Allows handling async results
3. Can lead to "callback hell" if nested too deep
4. Error-first pattern: callback(error, result)
*/

console.log("=== BASIC CALLBACK ===\n");

// Simple callback example
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(); // Execute the callback
}

greet("Alice", function() {
    console.log("Callback executed!\n");
});

console.log("=== ASYNC CALLBACK ===\n");

// Real async operation with callback
function fetchUser(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    
    setTimeout(() => {
        const user = {
            id: userId,
            name: "John Doe",
            email: "john@example.com"
        };
        callback(user); // Pass result to callback
    }, 1000);
}

fetchUser(1, function(user) {
    console.log("User received:", user);
    console.log();
});

console.log("=== ERROR-FIRST CALLBACKS ===\n");

// Node.js style: callback(error, result)
function divideNumbers(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("Cannot divide by zero!"), null);
        } else {
            callback(null, a / b);
        }
    }, 500);
}

// Handle success
divideNumbers(10, 2, (error, result) => {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("10 / 2 =", result);
    }
});

// Handle error
divideNumbers(10, 0, (error, result) => {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Result:", result);
    }
});

console.log("\n=== CALLBACK HELL (The Problem!) ===\n");

// Multiple async operations in sequence
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback("data1");
    }, 1000);
}

function step2(data, callback) {
    setTimeout(() => {
        console.log("Step 2 complete");
        callback(data + " + data2");
    }, 1000);
}

function step3(data, callback) {
    setTimeout(() => {
        console.log("Step 3 complete");
        callback(data + " + data3");
    }, 1000);
}

// The Pyramid of Doom! 😱
step1((result1) => {
    step2(result1, (result2) => {
        step3(result2, (result3) => {
            console.log("Final result:", result3);
            console.log();
        });
    });
});

/*
❌ PROBLEMS WITH CALLBACK HELL:
1. Hard to read (grows horizontally)
2. Difficult to maintain
3. Error handling is repetitive
4. Hard to debug
5. Can't use try/catch
*/

console.log("=== PRACTICE QUESTIONS ===\n");

// Q1: Create a callback function
function calculate(a, b, operation, callback) {
    setTimeout(() => {
        let result;
        if (operation === "add") result = a + b;
        else if (operation === "multiply") result = a * b;
        callback(result);
    }, 500);
}

calculate(5, 3, "add", (result) => {
    console.log("Q1: 5 + 3 =", result);
});

// Q2: Error-first callback
function fetchData(id, callback) {
    setTimeout(() => {
        if (id < 0) {
            callback(new Error("Invalid ID"), null);
        } else {
            callback(null, { id, data: "Some data" });
        }
    }, 500);
}

fetchData(5, (err, data) => {
    if (err) console.log("Q2 Error:", err.message);
    else console.log("Q2 Success:", data);
});

fetchData(-1, (err, data) => {
    if (err) console.log("Q2 Error:", err.message);
    else console.log("Q2 Success:", data);
});

// Q3: Multiple callbacks
function processOrder(orderId, onSuccess, onError) {
    setTimeout(() => {
        if (orderId > 0) {
            onSuccess({ orderId, status: "Processed" });
        } else {
            onError(new Error("Invalid order ID"));
        }
    }, 500);
}

console.log("\nQ3: Processing orders...");
processOrder(123, 
    (order) => console.log("Success:", order),
    (error) => console.log("Error:", error.message)
);

// Q4: Callback sequence
console.log("\nQ4: Sequential operations:");

function loadData(callback) {
    setTimeout(() => {
        console.log("Data loaded");
        callback("data");
    }, 500);
}

function processData(data, callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback(data.toUpperCase());
    }, 500);
}

function saveData(data, callback) {
    setTimeout(() => {
        console.log("Data saved");
        callback("Success!");
    }, 500);
}

loadData((data) => {
    processData(data, (processed) => {
        saveData(processed, (result) => {
            console.log("Q4 Result:", result);
        });
    });
});

console.log("\n=== REAL WORLD EXAMPLE ===\n");

// Restaurant order system
function takeOrder(dish, callback) {
    console.log(`📝 Order received: ${dish}`);
    setTimeout(() => {
        callback(null, { dish, orderNumber: 42 });
    }, 1000);
}

function cookFood(order, callback) {
    console.log(`👨‍🍳 Cooking ${order.dish}...`);
    setTimeout(() => {
        callback(null, { ...order, status: "Ready" });
    }, 2000);
}

function serveFood(order, callback) {
    console.log(`🍽️ Serving ${order.dish}`);
    setTimeout(() => {
        callback(null, "Enjoy your meal!");
    }, 500);
}

// Complete flow
takeOrder("Pasta", (err, order) => {
    if (err) return console.log(err);
    
    cookFood(order, (err, cookedOrder) => {
        if (err) return console.log(err);
        
        serveFood(cookedOrder, (err, message) => {
            if (err) return console.log(err);
            console.log(message);
        });
    });
});

/*
🎓 SUMMARY:
1. Callbacks handle async results
2. Error-first pattern: callback(error, result)
3. Callback hell = deeply nested callbacks
4. Hard to read and maintain
5. Solution: Promises! (next file)
*/

console.log("\n=== YOUR TURN ===\n");

// 🏆 CHALLENGE: Create a user registration flow
// 1. Validate email (1s)
// 2. Check if user exists (1s)
// 3. Save to database (1s)
// 4. Send welcome email (1s)
// Use callbacks and handle errors!

function validateEmail(email, callback) {
    // Your code here
}

function checkUserExists(email, callback) {
    // Your code here
}

function saveUser(email, callback) {
    // Your code here
}

function sendWelcomeEmail(email, callback) {
    // Your code here
}

/*
💡 NEXT FILE: 03_promises.js
Learn how Promises solve callback hell!
*/
