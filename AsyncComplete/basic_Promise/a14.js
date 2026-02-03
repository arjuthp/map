// Q14: Use Promise.any
console.log("\nQ14: Get first successful promise");
const fail1 = Promise.reject("Error 1");
const fail2 = Promise.reject("Error 2");
const success = new Promise(resolve => setTimeout(() => resolve("Success!"), 1000));
// Use Promise.any:

Promise.any([fail1, fail2, success]).then(result => {
    console.log("First success:", result);
})
.catch(error => {
    console.log("All failed:", error);
});