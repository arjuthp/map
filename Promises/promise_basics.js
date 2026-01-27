// 1. Creating a basic Promise
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

// 2. Consuming a Promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise completed"));

// 3. Promise with async operation (simulating API call)
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://api.example.com/data") {
                resolve({ id: 1, name: "John Doe" });
            } else {
                reject("Invalid URL");
            }
        }, 1500);
    });
}

// Using the promise
fetchData("https://api.example.com/data")
    .then(data => console.log("Data received:", data))
    .catch(error => console.log("Error:", error));

// 4. Promise constructor with error handling
function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("Cannot divide by zero"));
        } else {
            resolve(a / b);
        }
    });
}

divideNumbers(10, 2)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error.message));

divideNumbers(10, 0)
    .then(result => console.log("Result:", result))
    .catch(error => console.log("Error:", error.message));
