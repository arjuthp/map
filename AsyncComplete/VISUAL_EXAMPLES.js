// ============================================
// VISUAL ASYNC JAVASCRIPT - RUN THIS FILE!
// ============================================

console.log("🎬 STARTING ASYNC JOURNEY...\n");

// ============================================
// 1. RESTAURANT ANALOGY
// ============================================

console.log("=== 🍽️ RESTAURANT EXAMPLE ===\n");

// Synchronous (Fast Food Counter)
function fastFoodCounter() {
    console.log("👤 Customer 1: Ordering burger...");
    // Simulate making burger (blocking!)
    const start = Date.now();
    while (Date.now() - start < 2000) {} // Wait 2 seconds
    console.log("🍔 Customer 1: Got burger!");
    console.log("👤 Customer 2: Finally my turn!\n");
}

// Asynchronous (Buzzer System)
function buzzerSystem() {
    console.log("👤 Customer 1: Ordering burger...");
    console.log("🔔 Customer 1: Got buzzer, sitting down");
    
    setTimeout(() => {
        console.log("🍔 Customer 1: Buzzer rang! Got burger!");
    }, 2000);
    
    console.log("👤 Customer 2: Ordering immediately!");
    console.log("✅ No waiting in line!\n");
}

// Uncomment to see the difference:
// fastFoodCounter(); // Blocks for 2 seconds
buzzerSystem(); // Doesn't block!

// ============================================
// 2. MORNING ROUTINE
// ============================================

setTimeout(() => {
    console.log("\n=== ☀️ MORNING ROUTINE ===\n");
    
    // Helper function
    function task(name, duration) {
        return new Promise(resolve => {
            console.log(`⏰ Starting: ${name}`);
            setTimeout(() => {
                console.log(`✅ Finished: ${name}`);
                resolve(name);
            }, duration);
        });
    }
    
    // Inefficient (Sequential)
    async function slowMorning() {
        console.log("😴 Slow Morning (Sequential):");
        const start = Date.now();
        
        await task("Brush teeth", 500);
        await task("Make coffee", 1000);
        await task("Make breakfast", 1500);
        
        const time = Date.now() - start;
        console.log(`⏱️ Total time: ${time}ms\n`);
    }
    
    // Efficient (Parallel)
    async function fastMorning() {
        console.log("⚡ Fast Morning (Parallel):");
        const start = Date.now();
        
        // Start all at once!
        const [teeth, coffee, breakfast] = await Promise.all([
            task("Brush teeth", 500),
            task("Make coffee", 1000),
            task("Make breakfast", 1500)
        ]);
        
        const time = Date.now() - start;
        console.log(`⏱️ Total time: ${time}ms\n`);
    }
    
    // Run both
    slowMorning().then(() => fastMorning());
    
}, 3000);

// ============================================
// 3. PIZZA DELIVERY (Callbacks)
// ============================================

setTimeout(() => {
    console.log("\n=== 🍕 PIZZA DELIVERY ===\n");
    
    function orderPizza(callback) {
        console.log("📞 Calling pizza shop...");
        console.log("🍕 Shop: 'Your order will be ready in 2 seconds'");
        console.log("🔔 You: 'Call me when ready!' (gave callback)\n");
        
        setTimeout(() => {
            console.log("📱 *Ring ring* Pizza shop calling!");
            callback("Pepperoni Pizza");
        }, 2000);
    }
    
    console.log("👤 You: Ordering pizza...");
    orderPizza((pizza) => {
        console.log(`📦 You: Received ${pizza}!`);
        console.log("😋 You: Eating pizza...\n");
    });
    
    console.log("📺 You: Watching TV while waiting...");
    console.log("📱 You: Checking phone...");
    
}, 7000);

// ============================================
// 4. ONLINE SHOPPING (Promises)
// ============================================

setTimeout(() => {
    console.log("\n=== 📦 ONLINE SHOPPING ===\n");
    
    function orderProduct(productName, inStock = true) {
        return new Promise((resolve, reject) => {
            console.log(`🛒 Ordering: ${productName}`);
            console.log(`🧾 Receipt: Order #${Math.floor(Math.random() * 1000)}`);
            console.log(`📦 Status: PENDING...\n`);
            
            setTimeout(() => {
                if (inStock) {
                    resolve(`✅ ${productName} delivered!`);
                } else {
                    reject(`❌ ${productName} out of stock!`);
                }
            }, 2000);
        });
    }
    
    // Success case
    orderProduct("iPhone 15")
        .then((message) => {
            console.log(message);
            console.log("😊 Customer: Happy!\n");
        })
        .catch((error) => {
            console.log(error);
            console.log("😞 Customer: Sad!\n");
        });
    
    // Failure case
    setTimeout(() => {
        orderProduct("Sold Out Item", false)
            .then((message) => console.log(message))
            .catch((error) => {
                console.log(error);
                console.log("💰 Refund processed\n");
            });
    }, 3000);
    
}, 12000);

// ============================================
// 5. ASSEMBLY LINE (Promise Chaining)
// ============================================

setTimeout(() => {
    console.log("\n=== 🏭 ASSEMBLY LINE ===\n");
    
    function step(name, duration) {
        return new Promise(resolve => {
            console.log(`⚙️ ${name}...`);
            setTimeout(() => {
                console.log(`✅ ${name} complete!`);
                resolve(name);
            }, duration);
        });
    }
    
    console.log("🚗 Building a car:\n");
    
    step("Welding frame", 500)
        .then(() => step("Painting", 500))
        .then(() => step("Installing engine", 500))
        .then(() => step("Adding wheels", 500))
        .then(() => {
            console.log("\n🎉 Car complete!\n");
        });
    
}, 20000);

// ============================================
// 6. RESTAURANT KITCHEN (Promise.all)
// ============================================

setTimeout(() => {
    console.log("\n=== 👨‍🍳 RESTAURANT KITCHEN ===\n");
    
    function cook(dish, time) {
        return new Promise(resolve => {
            console.log(`👨‍🍳 Chef: Cooking ${dish}...`);
            setTimeout(() => {
                console.log(`✅ ${dish} ready!`);
                resolve(dish);
            }, time);
        });
    }
    
    console.log("📋 Order: Combo Meal\n");
    
    Promise.all([
        cook("🍔 Burger", 1000),
        cook("🍟 Fries", 800),
        cook("🥤 Shake", 500)
    ]).then(([burger, fries, shake]) => {
        console.log("\n🍽️ Combo meal ready!");
        console.log(`Serving: ${burger} + ${fries} + ${shake}\n`);
    });
    
}, 24000);

// ============================================
// 7. DELIVERY RACE (Promise.race)
// ============================================

setTimeout(() => {
    console.log("\n=== 🏃 DELIVERY RACE ===\n");
    
    function delivery(service, time) {
        return new Promise(resolve => {
            console.log(`🚗 ${service}: On the way...`);
            setTimeout(() => {
                resolve(`${service} arrived!`);
            }, time);
        });
    }
    
    console.log("📦 Ordered from 3 services, first one wins!\n");
    
    Promise.race([
        delivery("Uber Eats", 2000),
        delivery("DoorDash", 1000),  // Winner!
        delivery("GrubHub", 1500)
    ]).then((winner) => {
        console.log(`\n🏆 Winner: ${winner}`);
        console.log("🍕 Got my food!\n");
    });
    
}, 28000);

// ============================================
// 8. ASYNC/AWAIT (The Clean Way)
// ============================================

setTimeout(() => {
    console.log("\n=== ⏰ ASYNC/AWAIT MAGIC ===\n");
    
    function wait(seconds) {
        return new Promise(resolve => {
            setTimeout(resolve, seconds * 1000);
        });
    }
    
    // Old way (Promises)
    function makeDinnerOld() {
        console.log("📜 Old way (Promise chain):");
        return Promise.resolve()
            .then(() => {
                console.log("1. Boil water");
                return wait(1);
            })
            .then(() => {
                console.log("2. Add pasta");
                return wait(1);
            })
            .then(() => {
                console.log("3. Drain pasta");
                return wait(1);
            })
            .then(() => {
                console.log("4. Add sauce");
                console.log("✅ Dinner ready!\n");
            });
    }
    
    // New way (Async/Await)
    async function makeDinnerNew() {
        console.log("✨ New way (Async/Await):");
        console.log("1. Boil water");
        await wait(1);
        console.log("2. Add pasta");
        await wait(1);
        console.log("3. Drain pasta");
        await wait(1);
        console.log("4. Add sauce");
        console.log("✅ Dinner ready!\n");
    }
    
    makeDinnerOld().then(() => makeDinnerNew());
    
}, 32000);

// ============================================
// 9. ERROR HANDLING
// ============================================

setTimeout(() => {
    console.log("\n=== ⚠️ ERROR HANDLING ===\n");
    
    async function uploadFile(filename) {
        try {
            console.log(`📤 Uploading ${filename}...`);
            
            // Simulate random failure
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        resolve();
                    } else {
                        reject(new Error("Network error!"));
                    }
                }, 1000);
            });
            
            console.log(`✅ ${filename} uploaded!\n`);
            
        } catch (error) {
            console.log(`❌ Upload failed: ${error.message}`);
            console.log(`🔄 Retrying...\n`);
        }
    }
    
    uploadFile("photo.jpg");
    
}, 42000);

// ============================================
// 10. FINAL SUMMARY
// ============================================

setTimeout(() => {
    console.log("\n" + "=".repeat(50));
    console.log("🎓 ASYNC JAVASCRIPT SUMMARY");
    console.log("=".repeat(50));
    console.log(`
📌 KEY CONCEPTS:

1. Synchronous = Blocking (wait in line)
2. Asynchronous = Non-blocking (get buzzer)
3. Callbacks = Phone number (call me back)
4. Promises = Receipt (I promise to deliver)
5. Async/Await = Magic words (wait for it)

🎯 WHEN TO USE:

✅ Use ASYNC for:
   - Network requests (fetch)
   - File operations
   - Timers (setTimeout)
   - Database queries

❌ Use SYNC for:
   - Math calculations
   - String operations
   - Simple logic

🏆 BEST PRACTICES:

1. Use async/await (cleanest)
2. Use Promise.all() for parallel tasks
3. Always handle errors (try/catch)
4. Don't block the main thread

🎉 You now understand async JavaScript!
    `);
    console.log("=".repeat(50) + "\n");
    
}, 45000);

console.log("⏳ Watch the examples unfold over the next 50 seconds...\n");
