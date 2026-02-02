// TODO: Convert this callback-based function to return a promise

function oldCallbackFunction(callback) {
    setTimeout(() => {
        const data = { id: 1, message: "Hello from callback" };
        callback(null, data);
    }, 1000);
}

new Promise((resolve, reject) => {
    oldCallbackFunction((error, data) => {
        if (error = true) {
            reject(error);
        } else {
            resolve(data);
        }
    });
}).then(data => console.log("Converted:", data))
.catch(error => console.log("E:", error));
