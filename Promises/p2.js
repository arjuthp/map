// Exercise 2: Create a promise that randomly succeeds or fails
// TODO: Create a promise that has 50% chance of success
// If success: resolve with "Task completed successfully"
// If failure: reject with "Task failed"
// Handle both cases

const randomPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            resolve("Task completed Successfully");
        } else {
            reject("Task failed");
        }
    }, 1000);
});

randomPromise
    .then(result => console.log("✅", result))
    .catch(error => console.log("❌", error))
    .finally(() => console.log("Task attempt Finished"));
