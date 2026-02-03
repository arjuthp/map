
// ### The Problem: Callback Hell

// ```
// Real World: Nested Phone Calls

// You → Call Pizza Shop
//       ↓
//       "When pizza ready, call me"
//       ↓
//       Pizza Shop → Call Delivery Guy
//                    ↓
//                    "When you get pizza, call me"
//                    ↓
//                    Delivery Guy → Call Gas Station
//                                   ↓
//                                   "When tank full, call me"
//                                   ↓
//                                   😱 TOO MANY NESTED CALLS!
// ```

// Step 1: Create promise functions
function orderPizza() {
    console.log("Ordering pizza...");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("✅ Pizza ready!");
            resolve("Pepperoni Pizza");
        }, 1000);
    });
}

function deliverPizza(pizza) {
    console.log(` Delivering ${pizza}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("✅ At address!");
            resolve("123 Main St");
        }, 1000);
    });
}

function findDriver(address) {
    console.log(` Finding driver for ${address}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("✅ Driver found!");
            resolve("Driver John");
        }, 1000);
    });
}

function assignDelivery(driver) {
    console.log(`📋 Assigning to ${driver}...`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("✅ Assigned!");
            resolve("Delivered!");
        }, 1000);
    });
}

// Step 2: Use async/await
async function completeOrder() {
    const pizza = await orderPizza();
    const address = await deliverPizza(pizza);
    const driver = await findDriver(address);
    const status = await assignDelivery(driver);
    console.log("🎉 Final status:", status);
}

// Step 3: Call it
completeOrder();