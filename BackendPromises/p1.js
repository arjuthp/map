
// EXAMPLE 1: Database Connection Simulation
function connectToDatabase() {
    return new Promise((resolve, reject) => {
        console.log("Connecting to database...");
        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% success rate
            if (success) {
                resolve({ status: "connected", connectionId: "db_123" });
            } else {
                reject(new Error("Database connection failed"));
            }
        }, 1000);
    });
}

console.log(connectToDatabase);
